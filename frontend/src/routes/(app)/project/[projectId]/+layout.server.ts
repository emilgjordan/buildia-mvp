import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ params, fetch }) => {
    try {
        const response = await fetch(`http://localhost:3000/projects/${params.projectId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            console.error('Failed to fetch project data:', response);
            throw new Error('Failed to fetch project data');
        }

        const data = await response.json();

        return {
            project: data
        };
    } catch (e) {
        console.error('Error fetching project data:', e);
        error(500, 'Failed to fetch project data');
    }
}) satisfies LayoutServerLoad;
