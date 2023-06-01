export default function two_crystal_balls(breaks: boolean[]): number {
	const jmpAmount = Math.floor(Math.sqrt(breaks.length));
	let i = jmpAmount;
	for (; i < breaks.length; i += jmpAmount) { // walk by the sqrt of n until we hit a truthly value
		if (breaks[i]) {
		break;
		}
	}
	i -= jmpAmount; // go back one jump (to then walk at worst sqrt(n) length to the first truthy value

	for (let j = 0; j < jmpAmount && i < breaks.length; j++, ++i) {
		if (breaks[i] {
			return i; // return the first truthy value --> ++i so it's the index at which the crystal ball breaks
		}
	}
	return -1;
}

}
