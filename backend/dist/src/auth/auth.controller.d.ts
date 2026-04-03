import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import type { Request } from 'express';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<{
        email: string;
        username: string;
        firstName: string;
        lastName: string;
        id: number;
        hashedPassword: string;
        bio: string | null;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(body: any): void;
    refresh(req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
