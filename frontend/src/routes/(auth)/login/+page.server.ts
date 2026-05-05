import type { Actions, PageServerLoad } from './$types.js';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { loginFormSchema } from './login-form-schema.js';
import { zod4 } from 'sveltekit-superforms/adapters';
import { error, fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod4(loginFormSchema))
    };
};

export const actions: Actions = {
    default: async ({ request, cookies, url, fetch }) => {
        const form = await superValidate(request, zod4(loginFormSchema));
        if (!form.valid) {
            return fail(400, {
                form
            });
        }

        //console.log('trying to login with: ', form.data);
        let responseData;

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
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

                throw error(500, `Failed to login: ${responseData.message}`);
            }
        } catch (e) {
            throw error(500, `Error occured while attempting to login: ${e}`);
        }

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
