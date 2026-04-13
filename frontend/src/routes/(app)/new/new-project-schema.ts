import { z } from 'zod';

export const newProjectSchema = z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string().min(2).max(20)).default([]).optional(),
    public: z.boolean().default(true).optional(),
});

export type NewProjectSchema = typeof newProjectSchema;