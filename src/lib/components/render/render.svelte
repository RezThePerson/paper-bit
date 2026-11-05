<script>
	import { marked } from 'marked';
	import { renderedMD } from '#lib/scripts/rendered-md.js';
	import '#lib/style/render.css';
	import { sections, template } from '#lib/scripts/store.js';
	import { templates } from '#lib/scripts/templates.js';
</script>

<div
	class="h-full w-full rounded-lg border-4 border-ctp-surface0 p-3 px-4 transition duration-75 hover:border-ctp-surface1"
	id="render"
>
	{#each templates[$template].sections as section, i (i)}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html marked(renderedMD(section.render, $sections[i]))}
	{/each}
</div>
