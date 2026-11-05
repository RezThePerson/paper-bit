/** @param {string} md @param {any[]} values */
export function renderedMD(md, values) {
	return md.replace(/\{(\d+)\}/g, (match, index) => {
		return values[Number(index)]
	});
}
