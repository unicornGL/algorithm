/**
 * Bubble Sort
 * This algorithm repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
 * 
 * Algorithm steps:
 * 1. Start from the first element of the array.
 * 2. Compare the current element with the next element.
 * 3. If the current element is greater than the next element, swap them.
 * 4. Move to the next element and repeat steps 2-3 until the end of the array.
 * 5. Repeat steps 1-4 for each pass through the array, with each pass placing the next largest element at the end.
 * 
 * Time Complexity:
 * - Average case: O(n²)
 * - Worst case: O(n²)
 * - Best case: O(n)
 * 
 * The time complexity can be broken down as follows:
 * 1. Outer loop: Iterates n-1 times in the worst case
 * 2. Inner loop: Compares n-1-i elements in each iteration
 * 3. Total comparisons: n(n-1)/2 = O(n²)
 * 4. Best case occurs when the array is already sorted, resulting in O(n)
 * 
 * Space Complexity:
 * - O(1) as it sorts in-place, using only a constant amount of extra space
 * 
 * Note: Bubble Sort is simple but inefficient for large lists. 
 * It performs well on small datasets or when the list is nearly sorted. 
 * The optimization with the 'swapped' flag allows the algorithm to stop early if the list becomes sorted before all passes are complete.
 * 
 * @param {Array} arr - The array to be sorted
 * @returns {Array} The sorted array
 */
export default bubbleSort = (arr) => {
    const length = arr.length

    let swapped = true

    for (let i = 0; i < length && swapped; i++) {
        // If no swapping occurs in a pass, the array is sorted
        swapped = false

        for (let j = 0; j < length - 1 - i; j++) {
            // Swap if current element is larger than next element
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true
            }
        }
    }

    return arr
}
