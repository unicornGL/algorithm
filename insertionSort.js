/**
 * Insertion Sort
 * This algorithm sorts an array by iteratively inserting each element into its correct position within the sorted portion of the array.
 * 
 * Algorithm steps:
 * 1. Start from the second element (index 1) of the array.
 * 2. Compare the current element with the previous elements.
 * 3. If the current element is smaller, shift the larger elements to the right.
 * 4. Insert the current element into its correct position.
 * 5. Repeat steps 2-4 for all elements in the array.
 * 
 * Time Complexity:
 * - Average case: O(n²)
 * - Worst case: O(n²)
 * - Best case: O(n)
 * 
 * The time complexity can be broken down as follows:
 * 1. Outer loop: Iterates n-1 times (from second to last element)
 * 2. Inner loop: In the worst case, compares with all previous elements
 * 3. Best case occurs when the array is already sorted, resulting in O(n)
 * 
 * Space Complexity:
 * - O(1) as it sorts in-place, using only a constant amount of extra space
 * 
 * Note: Insertion Sort is efficient for small datasets or nearly sorted arrays.
 * It performs well when elements only need to be moved a small distance.
 * 
 * @param {Array} arr - The array to be sorted
 * @returns {Array} The sorted array
 */
export default insertionSort = (arr) => {
    const length = arr.length

    // Start from the second element (index 1)
    for (let i = 1; i < length; i++) {
        const curr = arr[i]
        let p = i - 1

        // Move elements greater than current element to one position ahead
        while (p >= 0 && arr[p] > curr) {
            arr[p + 1] = arr[p]
            p--
        }

        // Insert current element into correct position
        arr[p + 1] = curr
    }

    return arr
}