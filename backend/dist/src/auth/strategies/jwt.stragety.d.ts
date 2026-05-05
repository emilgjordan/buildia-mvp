import { UsersService } from '../../users/users.service';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(validationPayload: {
        email: string;
        sub: string;
    }): Promise<{
        id: number;
        email: string;
        username: string;
        firstName: string;
        lastName: string;
        hashedPassword: string;
        bio: string | null;
        role: import("../../../generated/prisma/enums").UserRole;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
export {};
