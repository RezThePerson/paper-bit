<script>
	import { marked } from 'marked';
	import { renderedMD } from '#lib/scripts/rendered-md.js';
	import '#lib/style/render.css';
</script>

<div
	class="h-full w-full rounded-lg border-4 border-ctp-surface0 p-3 px-4 transition duration-75 hover:border-ctp-surface1"
	id="render"
>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html marked($renderedMD)}
</div>
