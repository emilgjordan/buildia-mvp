import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import type { Request } from 'express';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    login(req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(req: Request): Promise<{
        success: true;
    }>;
    refresh(req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
