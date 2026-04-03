import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '../../generated/prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    getUserByUsername(username: string): Promise<User | null>;
    updateUser(id: number, updateUserDto: Prisma.UserUpdateInput): Promise<User>;
    removeUser(id: number): Promise<User>;
}
