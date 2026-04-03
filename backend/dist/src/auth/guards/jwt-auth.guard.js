"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("../auth.service");
const common_1 = require("@nestjs/common");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    authService;
    constructor(authService) {
        super();
        this.authService = authService;
    }
    handleRequest(err, user, info) {
        if (err) {
            throw new common_1.UnauthorizedException(err.message);
        }
        if (!user) {
            if (info && info.name === 'TokenExpiredError') {
                throw new common_1.UnauthorizedException('Token has expired');
            }
            else if (info && info.name === 'JsonWebTokenError') {
                throw new common_1.UnauthorizedException('Invalid token');
            }
            else if (info &&
                info.name === 'Error' &&
                info.message === 'No auth token') {
                throw new common_1.UnauthorizedException('No auth token provided');
            }
            else {
                throw new common_1.InternalServerErrorException('Something went wrong during authorization');
            }
        }
        return user;
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], JwtAuthGuard);
//# sourceMappingURL=jwt-auth.guard.js.map