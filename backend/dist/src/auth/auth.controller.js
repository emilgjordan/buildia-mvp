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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const users_service_1 = require("../users/users.service");
const common_2 = require("@nestjs/common");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const create_user_dto_1 = require("../users/dto/create-user.dto");
let AuthController = class AuthController {
    authService;
    usersService;
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    async register(createUserDto) {
        let user = await this.usersService.createUser(createUserDto);
        const { accessToken, refreshToken } = await this.authService.generateTokens(user);
        return {
            accessToken,
            refreshToken,
        };
    }
    async login(req) {
        if (!req.user) {
            throw new common_2.InternalServerErrorException('User not found');
        }
        const { accessToken, refreshToken } = await this.authService.generateTokens(req.user);
        return {
            accessToken,
            refreshToken,
        };
    }
    async logout(req) {
        const refreshToken = req.headers['refresh-token'];
        await this.authService.logout(refreshToken);
        return { success: true };
    }
    async refresh(req) {
        const refreshToken = req.headers['refresh-token'];
        if (!refreshToken) {
            throw new common_2.UnauthorizedException('Refresh token is required in Refresh-Token Header');
        }
        const { newAccessToken, newRefreshToken } = await this.authService.refreshTokens(refreshToken);
        return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_2.Post)('register'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_2.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_2.Post)('login'),
    __param(0, (0, common_2.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_2.Post)('logout'),
    __param(0, (0, common_2.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_2.Post)('refresh'),
    __param(0, (0, common_2.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map