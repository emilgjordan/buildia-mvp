<script>
	import { page } from '$app/stores';
	import { HomeIcon, House, HouseIcon, Lightbulb, Plus, Settings } from '@lucide/svelte';
	import UserMenu from './user-menu.svelte';
	import Search from './search.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	const { user, navHeight } = $props();
</script>

<nav
	class="sticky top-0 z-50 flex w-full flex-none items-center border-b bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"
	style="height: {navHeight}px;"
>
	<a class="mr-4 text-lg font-semibold text-blue-500" href="/">
		<HouseIcon />
	</a>

	{#if user}
		<Search class="mr-4 ml-auto" />

		<Button href="/new" variant="ghost" class="mr-3 h-full rounded-full border px-4">
			<Plus />
		</Button>

		<UserMenu {user} />
	{:else}
		<div class="ml-auto flex items-center space-x-4">
			<a href="/login" class="hover:text-gray-500"> Log in </a>
			<a
				href="/register"
				class="rounded border border-blue-500 px-3 py-2 text-blue-500 transition-all hover:bg-blue-500 hover:text-white"
			>
				Sign up
			</a>
		</div>
	{/if}
</nav>
