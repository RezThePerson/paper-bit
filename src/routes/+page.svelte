<script>
	import Bar from '#lib/components/bar/bar.svelte';
	import Inputs from '#lib/components/inputs/inputs.svelte';
	import Render from '#lib/components/render/render.svelte';
</script>

<div class="h-screen bg-ctp-base p-5">
	<div class="flex h-full flex-col gap-3 text-ctp-text">
		<div class="flex h-full gap-3">
			<Inputs />
			<Render />
		</div>

		<Bar />
	</div>
</div>
