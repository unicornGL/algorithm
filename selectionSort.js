/**
 * Selection Sort
 * This algorithm sorts an array by repeatedly finding the minimum element from the unsorted part,
 * and putting it at the beginning of the sorted part.
 * 
 * Algorithm steps:
 * 1. Divide the input list into two parts: sorted and unsorted.
 * 2. Find the smallest element in the unsorted part.
 * 3. Swap it with the first element of the unsorted part.
 * 4. Move the boundary between the sorted and unsorted parts one element to the right.
 * 5. Repeat steps 2-4 until the entire list is sorted.
 * 
 * Time Complexity:
 * - Average case: O(n²)
 * - Worst case: O(n²)
 * - Best case: O(n²)
 * 
 * The time complexity can be broken down as follows:
 * 1. Outer loop: Iterates n-1 times
 * 2. Inner loop: Searches for the minimum element, comparing n-i elements in each iteration
 * 3. Total comparisons: n(n-1)/2 = O(n²)
 * 
 * Space Complexity:
 * - O(1) as it sorts in-place, using only a constant amount of extra space
 * 
 * Note: Selection Sort has a consistent O(n²) time complexity for all cases. 
 * It performs the same number of comparisons regardless of the initial order of the elements. 
 * However, it makes fewer swaps compared to Bubble Sort, which can be advantageous when the cost of swapping elements is high.
 * 
 * @param {Array} arr - The array to be sorted
 * @returns {Array} The sorted array
 */
export default selectionSort = (arr) => {
    const length = arr.length

    for (let i = 0; i < length - 1; i++) {
        // Find the index of the minimum element in the unsorted part
        let minIndex = i

        for (let j = i; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }

    return arr
}