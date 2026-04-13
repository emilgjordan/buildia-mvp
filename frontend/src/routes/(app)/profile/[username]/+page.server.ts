import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const username = params.username;

    const res = await fetch(`http://localhost:3000/users/username/${username}`, {
        method: 'GET'
    });

    if (!res.ok) {
        error(res.status, 'Failed to fetch user data');
    }

    const user = await res.json();

    return {
        user
    };
}) satisfies PageServerLoad;