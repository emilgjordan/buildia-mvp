"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = __importStar(require("bcrypt"));
const common_2 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const uuid_1 = require("uuid");
const date_fns_1 = require("date-fns");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    usersService;
    jwtService;
    prisma;
    constructor(usersService, jwtService, prisma) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.prisma = prisma;
    }
    async validateUser(email, password) {
        const user = await this.usersService.getUserByEmail(email);
        if (!user) {
            throw new common_2.UnauthorizedException('User not found');
        }
        const passwordIsValid = await bcrypt.compare(password, user.hashedPassword);
        if (!passwordIsValid) {
            throw new common_2.UnauthorizedException('Incorrect password');
        }
        return user;
    }
    async generateTokens(user) {
        const accessToken = this.jwtService.sign({
            email: user.email,
            sub: user.id,
        });
        const refreshToken = await this.generateRefreshToken(user.id);
        return { accessToken, refreshToken };
    }
    async generateRefreshToken(userId) {
        const token = (0, uuid_1.v4)();
        const expiresIn = '7d';
        const duration = this.parseExpiresIn(expiresIn);
        const expiresAt = (0, date_fns_1.add)(new Date(), duration);
        await this.prisma.refreshToken.create({
            data: {
                token,
                expiresAt,
                user: {
                    connect: {
                        id: userId
                    },
                },
            },
        });
        return token;
    }
    async refreshTokens(refreshToken) {
        const storedToken = await this.prisma.refreshToken.findUnique({ where: { token: refreshToken } });
        if (!storedToken || storedToken.expiresAt < new Date() || storedToken.revoked) {
            throw new common_2.UnauthorizedException('Refresh token is invalid or expired');
        }
        const user = await this.usersService.getUserById(storedToken.userId);
        if (!user) {
            throw new common_2.UnauthorizedException('User not found');
        }
        const newAccessToken = this.jwtService.sign({
            sub: storedToken.userId,
            email: user.email,
        });
        const newRefreshToken = await this.generateRefreshToken(user.id);
        await this.prisma.refreshToken.delete({ where: { id: storedToken.id } });
        return { newAccessToken, newRefreshToken };
    }
    parseExpiresIn(expiresIn) {
        const match = expiresIn.match(/^(\d+)([dhm])$/);
        if (!match)
            throw new Error('Invalid expiresIn format');
        const value = parseInt(match[1], 10);
        const unit = match[2];
        switch (unit) {
            case 'd':
                return { days: value };
            case 'h':
                return { hours: value };
            case 'm':
                return { minutes: value };
            default:
                throw new Error('Invalid time unit in expiresIn');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map