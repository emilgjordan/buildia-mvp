<script lang="ts">
	import type { PageData } from './$types';
	import * as Form from '$lib/components/ui/form';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import { newProjectSchema } from './new-project-schema';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { X } from '@lucide/svelte';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	let { data }: { data: PageData } = $props();

	const form = superForm(data.form, {
		validators: zod4Client(newProjectSchema)
	});

	const { form: formData, enhance, submitting, errors } = form;

	function removeTag(index: number) {
		if (!$formData.tags) return;
		$formData.tags?.splice(index, 1);
		$formData.tags = [...$formData.tags];
	}

	let newTag = $state('');

	function addTag() {
		if (!$formData.tags) {
			console.log('No tags');
			return;
		}
		if (newTag) {
			$formData.tags = [...$formData.tags, newTag];
			newTag = '';
		}
	}

	let publicOrPrivate = $state('public');

	$effect(() => {
		if (publicOrPrivate === 'private') {
			$formData.public = false;
		} else {
			$formData.public = true;
		}
	});
</script>

<form method="POST" use:enhance class="">
	<Form.Field {form} name="title" class="mb-4">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Title</Form.Label>
				<Input {...props} bind:value={$formData.title} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="description" class="mb-4">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Description</Form.Label>
				<Textarea {...props} bind:value={$formData.description} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="tags">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label
					>Tags
					<span class="text-sm font-normal text-neutral-500"> </span>
				</Form.Label>
				{#if $formData.tags && $formData.tags.length}
					<div class="flex flex-wrap">
						{#each $formData.tags as tag, i}
							<div class="items-centexr mr-2 mb-2 flex rounded-full border px-3 py-1 text-sm">
								<span class="mr-2">{tag}</span>
								<button type="button" onclick={() => removeTag(i)}>
									<X size="16" />
								</button>
								<!-- Hidden input so the tag is included in the submitted data -->
							</div>
						{/each}
					</div>
				{/if}
				<Input {...props} type="hidden" value={$formData.tags} />
			{/snippet}
		</Form.Control>

		{#if $errors.tags}
			<p class="text-sm text-red-500">
				<!-- {$errors.tags.join(', ')} -->
			</p>
		{/if}
	</Form.Field>
	<Input
		placeholder="Add a tag..."
		bind:value={newTag}
		onkeydown={(e) => {
			if (e.key === 'Enter') {
				e.preventDefault();
				addTag();
			}
		}}
		class="mt-2 mb-6"
	/>

	<Separator class="my-4" />
	<Form.Fieldset {form} name="public" class="">
		<RadioGroup.Root bind:value={publicOrPrivate}>
			<div class="mt-2 mb-2 flex items-center space-x-4">
				<Form.Control>
					{#snippet children({ props })}
						<RadioGroup.Item {...props} value="public" />
						<Form.Label>
							<h2>Public</h2>
							<span class="text-sm font-normal text-neutral-500">Anyone can see this project.</span>
						</Form.Label>
					{/snippet}
				</Form.Control>
			</div>
			<div class="flex items-center space-x-4">
				<Form.Control>
					{#snippet children({ props })}
						<RadioGroup.Item {...props} value="private" />
						<Form.Label>
							<h2>Private</h2>
							<span class="text-sm font-normal text-neutral-500"
								>Only you and people you invite can see this project.</span
							>
						</Form.Label>
					{/snippet}
				</Form.Control>
			</div>
		</RadioGroup.Root>
		<Form.FieldErrors />
	</Form.Fieldset>

	<Separator class="my-4" />

	<div class="flex w-full">
		<!-- Ensure this button actually submits the form: some button components default to type="button" -->
		<Form.Button type="submit" class="ml-auto bg-green-600 hover:bg-green-700">Create</Form.Button>
	</div>
</form>

<!-- <SuperDebug data={$formData} /> -->
