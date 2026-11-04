import { writable } from 'svelte/store';

export const template = writable(0);
export const sections = writable([]);

export function updateInfo() {
	// Get values
	const savedTemplate = localStorage.getItem('template');
	if (savedTemplate) {
		template.set(Number(savedTemplate));
	}

	const savedSections = localStorage.getItem('sections');
	if (savedSections) {
		sections.set(JSON.parse(savedSections));
	}

	// Sync values
	template.subscribe((value) => {
		localStorage.setItem('template', String(value));
	});

	sections.subscribe((value) => {
		localStorage.setItem('sections', JSON.stringify(value));
	});
}
