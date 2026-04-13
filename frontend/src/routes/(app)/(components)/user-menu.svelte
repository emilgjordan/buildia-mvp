<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { CreditCard, LogOut, Settings, User } from '@lucide/svelte';

	const { user } = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<Avatar.Root class="h-8 w-8">
			<Avatar.Image src={user.profilePicture} alt={user.username} />
			<Avatar.Fallback>{user.firstName[0] + user.lastName[0]}</Avatar.Fallback>
		</Avatar.Root>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="mt-2 w-56" align="end">
		<DropdownMenu.Label class="font-normal">
			<div class="flex flex-col space-y-1">
				<p class="text-sm leading-none font-medium">{user.username}</p>
				<p class="text-xs leading-none text-muted-foreground">{user.email}</p>
			</div>
		</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Item itemref="profile/{user.username}" class="p-0">
				<a
					href="/profile/{user.username}"
					class="flex w-full cursor-default items-center gap-2 px-2 py-1.5"
				>
					<User class="mr-2 h-4 w-4" />
					<span>Profile</span>
				</a>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<CreditCard class="mr-2 h-4 w-4" />
				<span>Billing</span>
			</DropdownMenu.Item>
			<DropdownMenu.Item class="p-0">
				<a
					href="/settings/profile"
					class="flex w-full cursor-default items-center gap-2 px-2 py-1.5"
				>
					<Settings class="mr-2 h-4 w-4" />
					<span>Settings</span>
				</a>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item class="p-0">
			<form method="post" action="/?/logout" class="w-full">
				<button
					type="submit"
					class="flex w-full cursor-default items-center px-2 py-1.5"
					tabindex="-1"
				>
					<LogOut class="mr-2 h-4 w-4" />
					<span>Log out</span>
				</button>
			</form>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
