<script>
	import { template } from '#lib/scripts/store.js';
	import { templates } from '#lib/scripts/templates.js';
</script>

<div
	class="h-full w-full rounded-xl border-4 border-ctp-surface0 p-3 transition duration-75 hover:border-ctp-surface1"
>
	<select bind:value={$template}>
		{#each templates as item, index (index)}
			<option value={item.type}>
				{item.type}
			</option>
		{/each}
	</select>
</div>
