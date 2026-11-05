import { writable } from 'svelte/store';

function format(str, arr) {
	return str.replace(/\{(\d+)\}/g, (match, idx) => {
		const i = Number(idx);
		return i in arr ? String(arr[i]) : match;
	});
}

export const renderedMD = writable("fdfdfd");
