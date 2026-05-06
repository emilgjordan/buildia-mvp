import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ params, fetch }) => {
    const response = await fetch(`http://localhost:3000/projects/${params.projectId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 404) {
        error(404, 'Project not found');
    }
    if (!response.ok) {
        error(500, 'Failed to fetch project data');
    }

    const project = await response.json();

    return { project };
}) satisfies LayoutServerLoad;
