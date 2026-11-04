<script>
  import { marked } from 'marked';
  import { sections, template } from '#lib/scripts/store.js';
  import { templates } from '#lib/scripts/templates.js';
  import "#lib/style/render.css";

  function format(str, arr) {
    if (!str || !arr) return str ?? '';
    return str.replace(/\{(\d+)\}/g, (match, idx) => {
      const i = Number(idx);
      return i in arr ? String(arr[i]) : match;
    });
  }
</script>

<div
  class="h-full w-full rounded-lg border-4 border-ctp-surface0 p-3 transition duration-75 hover:border-ctp-surface1 px-4"
  id="render"
>
  {#each templates[$template].sections as section, i (i)}
    {@html marked(format(section.render, $sections[i]))}
  {/each}
</div>
