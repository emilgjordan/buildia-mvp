<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { AtSign, Mail } from '@lucide/svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="m-auto mt-8 w-1/2">
	<div class="flex flex-row items-center space-x-8">
		<Avatar.Root class="h-40 w-40">
			<Avatar.Image src={data.user.profilePicture} alt={data.user.username} />
			<Avatar.Fallback class="text-[80px]"
				>{data.user.firstName[0] + data.user.lastName[0]}</Avatar.Fallback
			>
		</Avatar.Root>

		<div>
			<h1 class="font-semibold">{data.user.firstName} {data.user.lastName}</h1>

			<div class="flex flex-row items-center space-x-1.5 text-neutral-700">
				<AtSign size="18px" class="pt-0.5" />
				<span>{data.user.username}</span>
			</div>

			<div class="flex flex-row items-center space-x-1.5 text-neutral-700">
				<Mail size="18px" class="pt-0.5" />
				<a href="mailto:{data.user.email}" class="hover:text-neutral-500">{data.user.email}</a>
			</div>
		</div>
	</div>

	<br />

	<div class="border-l px-4 py-2">
		<p>{data.user.bio}</p>
	</div>
</div>
