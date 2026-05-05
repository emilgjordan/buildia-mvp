<script lang="ts">
    import * as Avatar from '$lib/components/ui/avatar';
    import { Separator } from '$lib/components/ui/separator';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    let project = data?.project;

    console.log('Project:', project);
</script>

<div class="flex items-center justify-center">
    <div class="w-1/2 py-12">
        <h1 class="mb-4 text-4xl font-semibold">{project.title}</h1>
        <p class=" text-neutral-600">{project.description}</p>

        <Separator class="my-4" />

        <h2>Members</h2>
        <ul class="flex flex-col gap-4">
            {#each project.members as member}
                <li class="flex flex-row items-center">
                    <Avatar.Root class="mr-2 h-8 w-8">
                        <Avatar.Image src={member.user.profilePicture} alt={member.user.username} />
                        <Avatar.Fallback
                            >{member.user.firstName[0] + member.user.lastName[0]}</Avatar.Fallback
                        >
                    </Avatar.Root>
                    <a href="/profile/{member.user.username}" class="">{member.user.username}</a>
                </li>
            {/each}
        </ul>
    </div>
</div>
