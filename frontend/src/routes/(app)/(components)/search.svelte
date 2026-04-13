<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Search, X } from '@lucide/svelte';

	const { class: propClass = '' } = $props();

	let query = $page.url.pathname === '/search' ? $page.url.searchParams.get('q') || '' : '';

	afterNavigate((nav) => {
		if (nav.from?.url.pathname === '/search' && nav.to?.url.pathname !== '/search') {
			query = '';
		}
	});

	async function search(event: Event) {
		event.preventDefault();
		if ($page.url.pathname === '/search') {
			console.log('hi');
			const url = new URL($page.url.toString());
			url.searchParams.set('q', query);
			url.searchParams.set('p', '1');

			goto(url.toString(), { noScroll: true });
		} else {
			const url = new URL('/search', window.location.origin);
			url.searchParams.set('p', '1');
			url.searchParams.set('q', query);
			url.searchParams.set('tab', 'projects');
			goto(url.toString(), { noScroll: true });
		}
	}
</script>

<div class="{$page.url.pathname === '/search' ? 'flex-1' : ''} relative {propClass}">
	<Search
		class="pointer-events-none absolute top-1/2 left-2 -translate-y-1/2 text-neutral-500"
		size="18px"
	/>
	<form onsubmit={search} class="h-full">
		<Input
			type="text"
			placeholder="Search..."
			class="h-full px-8"
			bind:value={query}
			spellcheck={false}
		/>
	</form>

	{#if query}
		<button
			class="absolute top-1/2 right-2 -translate-y-1/2 text-neutral-500"
			onclick={() => (query = '')}
		>
			<X size="18px" />
		</button>
	{/if}
</div>
