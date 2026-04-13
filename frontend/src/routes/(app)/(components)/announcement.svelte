<script>
	let { announcement } = $props();
</script>

<div class="rounded-lg border bg-white p-4">
	<h1 class="mb-2 text-lg font-semibold">
		{announcement.title}
	</h1>
	<p class="text-sm text-neutral-800">
		{announcement.body}
	</p>
	{#each announcement.images as image}
		<img class="my-4" width="400" src={image} alt="mong" />
	{/each}
	<p class="mt-4 text-xs text-neutral-700">
		{announcement.date}
	</p>
</div>
