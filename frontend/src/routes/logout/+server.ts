import { redirect, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ cookies, fetch }) => {
    const refreshToken = cookies.get('refreshToken');

    if (refreshToken) {
        await fetch('http://localhost:3000/auth/logout', {
            method: 'POST',
            headers: {
                'Refresh-Token': refreshToken,
            },
        });
    }

    cookies.delete('accessToken', { path: '/' });
    cookies.delete('refreshToken', { path: '/' });

    throw redirect(303, '/login');
};
