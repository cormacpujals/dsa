// O(logN)
export default function bs_list(haystack: number[], needle: number): boolean {

	let lo = 0;
	let hi = haystack.length;

	do {
		const m = Math.floor(lo + (hi - lo) / 2); // this operation sets the midpoint
		const v = haystack[m]; // v, the current midpoint will be compared with the target value, needle

		if (v === needle) {
			return true;
		} else if (v > needle) {
			hi = m; // if our value is too high, set the new hi to the former midpoint to search the lower values
		} else {
			lo = m + 1; // otherwise set our low to our current midpoint + 1 (to search all greater values; we already searched m)
		}
	} while (lo < hi);

	return false; // haystack does not contain needle
}
