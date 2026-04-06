<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { CircleAlert, LoaderCircle } from '@lucide/svelte';
	import { loginFormSchema, type LoginFormSchema } from './login-form-schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import * as Alert from '$lib/components/ui/alert';
	import type { ZodTypeAny } from 'zod';

	let { data }: { data: { form: SuperValidated<Infer<typeof loginFormSchema>> } } = $props();

	const form = superForm(data.form, {
		validators: zod4Client(loginFormSchema)
	});

	const { form: formData, enhance, submitting, errors } = form;
</script>

<form method="POST" use:enhance class="w-full">
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Username</Form.Label>
				<Input {...props} bind:value={$formData.email} />
			{/snippet}
		</Form.Control>

		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="password" class="mb-4">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Password</Form.Label>
				<Input type="password" {...props} bind:value={$formData.password} />
			{/snippet}
		</Form.Control>

		<Form.FieldErrors />
	</Form.Field>
	{#if $errors._errors}
		<Alert.Root variant="destructive" class="">
			<CircleAlert class="h-4 w-4" />
			<Alert.Title>Incorrect email or password.</Alert.Title>
			<Alert.Description>Please check your credentials.</Alert.Description>
		</Alert.Root>
	{/if}
	<Form.Button class="mt-4 w-full" disabled={$submitting}>
		{#if $submitting}
			<LoaderCircle color="white" class="mr-2 animate-spin" size={16}></LoaderCircle>
		{/if}
		Submit
	</Form.Button>
</form>
