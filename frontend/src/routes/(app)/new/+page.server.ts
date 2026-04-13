import { fail, superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from './$types';
import { zod4 } from 'sveltekit-superforms/adapters';
import { newProjectSchema } from './new-project-schema';
import type { Actions } from '@sveltejs/kit';

export const load = (async () => {
    return {
        form: await superValidate(zod4(newProjectSchema)),
    };
}) satisfies PageServerLoad;


export const actions: Actions = {
    default: async ({ request, fetch, locals, cookies }) => {
        const form = await superValidate(request, zod4(newProjectSchema));

        if (!form.valid) {
            return fail(400, { form });
        }

        const accessToken = cookies.get('accessToken');
        if (!accessToken) {
            console.log("User needs to log in")
            return fail(401, { form });
        }


        const { user } = locals;

        console.log('Creating project with data:', form.data);

        try {
            const response = await fetch(`http://localhost:3000/projects`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    ...form.data,
                })
            });

            if (!response.ok) {
                console.error('Failed to create project:', await response.json());
                throw new Error('Failed to create project');
            }

            return { form };
        } catch (error) {
            console.error('Error creating project:', error);
            return { form };
        }
    }
}