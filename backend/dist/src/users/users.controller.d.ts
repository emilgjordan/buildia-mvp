import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import type { User } from '../../generated/prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<{
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
    }[]>;
    getCurrentUser(user: User): {
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
    };
    getUser(id: string): Promise<{
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
    } | null>;
    getUserByUsername(username: string): Promise<{
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
    } | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
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
    remove(id: string): Promise<{
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
}
