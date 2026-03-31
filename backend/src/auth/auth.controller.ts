import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { UseGuards, Post, Req, InternalServerErrorException, Body, UnauthorizedException } from '@nestjs/common';
import type { Request } from 'express';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,
        private readonly usersService: UsersService) { }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req: Request) {

        if (!req.user) {
            throw new InternalServerErrorException('User not found');
        }

        const { accessToken, refreshToken } = await this.authService.generateTokens(
            req.user,
        )

        return {
            accessToken, refreshToken
        };
    }

    @Post('logout')
    logout(@Body() body: any) { }

    @Post('refresh')
    async refresh(
        @Req() req: Request,
    ): Promise<{ accessToken: string; refreshToken: string }> {
        const refreshToken = req.headers['refresh-token'] as string;

        if (!refreshToken) {
            throw new UnauthorizedException(
                'Refresh token is required in Refresh-Token Header',
            );
        }

        const { newAccessToken, newRefreshToken } =
            await this.authService.refreshTokens(refreshToken);

        return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    }
}
