<script>
	import { Separator } from '$lib/components/ui/separator';
	import RegisterForm from './register-form.svelte';

	let { data } = $props();
</script>

<div class="m-auto flex h-full max-w-md flex-col items-center justify-center p-8">
	<h1 class="mb-8 text-2xl font-semibold tracking-tight">Create an Account</h1>
	<RegisterForm {data} />

	<Separator class="my-8 mb-7" />

	<div class="flex flex-row">
		<a href="/login" class="text-center text-sm text-blue-500">Already have an account?</a>
	</div>
</div>
