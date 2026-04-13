<script lang="ts">
	import Navbar from './(components)/navbar.svelte';

	let { children, data } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Navbar user={data.user} navHeight={64} />

	<main>
		{@render children()}
	</main>
</div>
