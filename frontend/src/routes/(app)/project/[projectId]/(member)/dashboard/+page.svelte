<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let project = data?.project;
</script>

<div class="flex items-center justify-center">
    <div class="w-1/2 py-12">
        <h1 class="mb-4 text-4xl font-semibold">{project.title}</h1>
        <p class=" text-neutral-600">{project.description}</p>
    </div>
</div>
