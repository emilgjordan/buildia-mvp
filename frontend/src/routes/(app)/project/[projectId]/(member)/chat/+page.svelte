<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let project = data?.project;
</script>

<div class="chat-container">
    <h1>Chat - {project?.title || 'Project'}</h1>
    <div class="chat-placeholder">
        <p>Chat functionality coming soon...</p>
    </div>
</div>
