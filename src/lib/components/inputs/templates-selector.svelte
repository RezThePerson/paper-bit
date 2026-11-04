<script>
	import { template } from '#lib/scripts/store.js';
	import { templates } from '#lib/scripts/templates.js';
</script>

<div class="flex flex-col gap-2">
	<h1 class="text-2xl">Template</h1>

	<select bind:value={$template} class="w-full rounded-lg border-2 border-ctp-surface0 px-3 py-2">
		{#each templates as item, index (index)}
			<option value={index}>
				{item.name}
			</option>
		{/each}
	</select>
</div>
