<script>
	import { sections, template } from '#lib/scripts/store.js';
	import { templates } from '#lib/scripts/templates.js';
</script>

{#each templates[$template].sections as section, ti (ti)}
	<div class="flex flex-col gap-2">
		<h1 class="text-2xl">{section.label}</h1>

		{#each section.inputs as input, si (si)}
			<div>
				<label for={input.label}>
					{input.label}
				</label>
				<input
					type={input.type}
					id={input.label}
					value={$sections[ti]?.[si] ?? ''}
					oninput={(e) => {
						$sections[ti] ??= section.inputs.map(() => '');
						$sections[ti][si] = e.target.value;
						$sections = $sections;
					}}
					class="w-full rounded-lg border-2 border-ctp-surface0 px-3 py-2 outline-0"
				/>
			</div>
		{/each}
	</div>
{/each}
