import { authenticateUser } from '$lib/server/authenticateUser';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {

    const { cookies, locals, request } = event;

    locals.user = await authenticateUser(event);

    const response = await resolve(event);
    return response;
};