import type { Actions, PageServerLoad } from './$types.js';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { registerFormSchema } from './register-form-schema.js';
import { zod4 } from 'sveltekit-superforms/adapters';
import { error, fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod4(registerFormSchema))
    };
};

export const actions: Actions = {
    default: async ({ request, cookies, url, fetch }) => {
        const form = await superValidate(request, zod4(registerFormSchema));
        if (!form.valid) {
            return fail(400, {
                form
            });
        }

        //console.log('trying to register with: ', form.data);
        let responseData;

        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form.data),
                credentials: 'include'
            });

            responseData = await response.json();

            console.log(responseData);

            if (!response.ok) {
                console.log(response);
                if (response.status === 401) {
                    return setError(form, '', responseData.message);
                }

                throw error(500, `Failed to register: ${responseData.message}`);
            }
        } catch (e) {
            throw error(500, `Error occured while attempting to register: ${e}`);
        }

        console.log('setting cookies with responseData: ', responseData);

        cookies.set('accessToken', responseData.accessToken, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: false
        });

        cookies.set('refreshToken', responseData.refreshToken, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: false
        });

        //	console.log('Login successful: ', responseData);

        const redirectTo = url.searchParams.get('redirectTo');
        if (redirectTo) {
            throw redirect(302, `/${redirectTo.slice(1)}`);
        }
        throw redirect(302, '/');
    }
};
