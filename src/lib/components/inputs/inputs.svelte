<script>
	import Sections from './sections.svelte';
	import TemplatesSelector from './templates-selector.svelte';
</script>

<div
	class="flex h-full w-full flex-col gap-4 rounded-lg border-4 border-ctp-surface0 p-3 transition duration-75 hover:border-ctp-surface1"
>
	<TemplatesSelector />

	<Sections />
</div>
