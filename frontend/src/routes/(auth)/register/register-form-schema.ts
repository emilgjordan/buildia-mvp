import * as z from 'zod/v4';

export const registerFormSchema = z.object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    email: z.email("Invalid email address"),
    username: z.string().nonempty("Username is required"),
    password: z
        .string()
        .min(8, 'Password should be at least 8 characters')
        .max(50, "Password shouldn't exceed 50 characters")
});

export type RegisterFormSchema = typeof registerFormSchema;