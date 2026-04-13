<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { PageData } from './$types.js';
	import NewProjectForm from './new-project-form.svelte';

	let { data }: { data: PageData } = $props();
</script>

<div class="m-auto mt-8 w-1/2">
	<h1 class="mb-2 text-lg font-semibold">Create a new project</h1>
	<p class="text-sm text-neutral-500">
		Fill in the form below to create a new project. You can always edit it later.
	</p>
	<Separator class="my-4" />
	<NewProjectForm {data} />
</div>
