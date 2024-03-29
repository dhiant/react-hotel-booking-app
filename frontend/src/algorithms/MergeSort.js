function mergeSort(arr) {
	// if array have 0 or 1 element it is sorted by default
	if (arr.length <= 1) return arr;

	// split the arr into 2 halves
	const middleIndex = Math.floor(arr.length / 2);
	const leftHalf = arr.slice(0, middleIndex);
	const rightHalf = arr.slice(middleIndex);

	// recursively divide the each halves
	const sortedLeftHalf = mergeSort(leftHalf);
	const sortedRightHalf = mergeSort(rightHalf);

	return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(leftArr, rightArr) {
	let sortedArr = [];
	let leftIndex = 0;
	let rightIndex = 0;

	// while both arrays are still remaining elements
	while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
		const leftElement = leftArr[leftIndex];
		const rightElement = rightArr[rightIndex];

		if (leftElement <= rightElement) {
			sortedArr.push(leftElement);
			leftIndex++;
		} else {
			sortedArr.push(rightElement);
			rightIndex++;
		}
	}

	// add any leftover elements from the non-empty array
	sortedArr = sortedArr.concat(leftArr.slice(leftIndex));
	sortedArr = sortedArr.concat(rightArr.slice(rightIndex));

	return sortedArr;
}

const unsortedArr = [5, 3, 8, 4, 2, 7, 1];
console.log("Unsorted: ", unsortedArr);
const sortedArr = mergeSort(unsortedArr);
console.log("Sorted:   ", sortedArr);

export default mergeSort;
