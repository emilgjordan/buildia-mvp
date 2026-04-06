import * as z from 'zod/v4';

export const loginFormSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z
        .string()
        .min(8, 'Password should be at least 8 characters')
        .max(50, "Passoword shoudn't exceed 50 characters")
});

export type LoginFormSchema = typeof loginFormSchema;