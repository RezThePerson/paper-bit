/** @type {Record<string, typeof import('./templates-type.json')>} */
const templateModules = import.meta.glob('../../../templates/*.toml', {
	eager: true,
	import: 'default'
});

export const templates = Object.values(templateModules);
