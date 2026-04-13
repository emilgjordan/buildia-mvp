import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, fetch }) => {

    const { user } = locals;

    if (!user) {
        return {};
    }

    try {
        const response = await fetch(`http://localhost:3000/projects?userId=${user.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });


        if (!response.ok) {
            error(500, 'Failed to fetch user data');
        }

        const data = await response.json();

        return {
            projects: data
        };
    }
    catch (error) {
        console.error('Error fetching user data:', error);
    }


}) satisfies PageServerLoad;