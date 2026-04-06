<script>
	import { Separator } from '$lib/components/ui/separator';
	import LoginForm from './login-form.svelte';

	let { data } = $props();
</script>

<div class="m-auto flex h-full max-w-md flex-col items-center justify-center p-8">
	<h1 class="mb-8 text-2xl font-semibold tracking-tight">Log in to Buildia</h1>
	<LoginForm {data} />

	<Separator class="my-8 mb-7" />

	<div class="flex flex-row">
		<a href="/register" class="text-center text-sm text-blue-500">Need an account?</a>
		<Separator orientation="vertical" class="mx-4" />
		<a href="/" class="text-center text-sm text-blue-500">Forgot your password?</a>
	</div>
</div>
