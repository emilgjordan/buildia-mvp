import type { LayoutServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const load = (async ({ params, fetch, locals }) => {
    const user = locals.user;

    if (!user) {
        throw redirect(302, '/login');
    }

    try {
        const res = await fetch(`http://localhost:3000/projects/${params.projectId}/membership`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.status === 403) {
            throw error(403, 'You are not a member of this project');
        }

        if (!res.ok) {
            console.error('Membership check failed:', res.status);
            throw error(500, 'Failed to verify membership');
        }

        const membership = await res.json();

        return {
            membership
        };
    } catch (e) {
        console.error('Error checking membership:', e);
        throw error(500, 'Membership check failed');
    }
}) satisfies LayoutServerLoad;
