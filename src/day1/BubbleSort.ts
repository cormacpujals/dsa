// O(n^2)
export default function bubble_sort(arr: number[]): void {
	
	for (let i = 0; i < arr.length; ++i) {
		for (let j = 0; j < arr.length - 1 - i; ++j) { 
			if (arr[j] > arr[j + 1]) {
				const tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
				// what did we did in this code block?
				// we're traversing the length of the
				// array - 1 (because j + 1 would go out of bounds otherwise)
				// and array - i because after each completed j-loop, 
				// the last element is for sure sorted. 
				// in the j-loop, if arr[j] is > arr[j+1], swap the values
				// the j-loop repeats until the largest unsorted value is 
				// sorted and then the i-loop increments and the process 
				// repeats
				
			}	
		}
	}

}
