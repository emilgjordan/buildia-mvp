import { UsersService } from '../../users/users.service';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(validationPayload: {
        email: string;
        sub: string;
    }): Promise<{
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
}
export {};
