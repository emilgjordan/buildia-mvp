import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import type { User } from '../../generated/prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<{
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
    }[]>;
    getCurrentUser(user: User): {
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
    };
    getUser(id: string): Promise<{
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
    } | null>;
    getUserByUsername(username: string): Promise<{
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
    } | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
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
    remove(id: string): Promise<{
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
}
