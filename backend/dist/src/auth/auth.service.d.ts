import { UsersService } from '../users/users.service';
import { User } from '../../generated/prisma/client';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly prisma;
    constructor(usersService: UsersService, jwtService: JwtService, prisma: PrismaService);
    validateUser(email: string, password: string): Promise<{
        id: number;
        email: string;
        username: string;
        firstName: string;
        lastName: string;
        hashedPassword: string;
        bio: string | null;
        role: import("../../generated/prisma/enums").UserRole;
        createdAt: Date;
        updatedAt: Date;
    }>;
    generateTokens(user: User): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    generateRefreshToken(userId: number): Promise<string>;
    refreshTokens(refreshToken: string): Promise<{
        newAccessToken: string;
        newRefreshToken: string;
    }>;
    logout(refreshToken?: string): Promise<void>;
    private parseExpiresIn;
}
