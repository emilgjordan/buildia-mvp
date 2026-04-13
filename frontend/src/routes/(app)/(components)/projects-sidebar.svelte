<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Users } from '@lucide/svelte';

	// Read props in runes mode and normalize to an array
	let { items }: { items: { href: string; title: string; users?: any }[] } = $props();
</script>

<div class="h-full border-r p-8">
	<h1 class="mb-4 text-lg font-semibold">Your Projects</h1>

	<nav class="flex h-full flex-col">
		{#each items ?? [] as item}
			<a href={item.href} class="group justify-start py-2 pl-0 text-wrap" data-sveltekit-noscroll>
				<div class="flex w-full flex-row items-center">
					<div class=" text-sm text-neutral-800 group-hover:underline">
						{item.title}
					</div>
				</div>
			</a>
		{/each}
	</nav>
</div>
