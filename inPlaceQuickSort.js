/**
 * In-place Quick Sort
 * This algorithm sorts an array in-place by recursively partitioning it around a pivot element.
 * 
 * Algorithm steps:
 * 1. Choose a pivot element (in this implementation, the last element is chosen as pivot)
 * 2. Partition the array around the pivot
 * 3. Recursively apply the algorithm to the sub-arrays before and after the pivot
 * 
 * Time Complexity:
 * - Average case: O(n log n)
 * - Worst case: O(n²) (occurs when the array is already sorted or reverse sorted)
 * - Best case: O(n log n)
 * 
 * @param {Array} arr - The array to be sorted
 * @param {number} [low=0] - The starting index of the portion to be sorted
 * @param {number} [high=arr.length - 1] - The ending index of the portion to be sorted
 * @returns {Array} The sorted array
 */

export default inPlaceQuickSort = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        const pivotIndex = partition(arr, low, high)

        // Recursively sort elements before and after partition
        inPlaceQuickSort(arr, low, pivotIndex - 1)
        inPlaceQuickSort(arr, pivotIndex + 1, high)
    }

    return arr
}

/**
 * Partitions the array around a pivot element (the last element in this implementation)
 * 
 * This function does the following:
 * 1. Chooses the last element as the pivot
 * 2. Partitions the array so that elements smaller than the pivot are on the left and elements larger than the pivot are on the right
 * 3. Moves the pivot to its final sorted position
 * 
 * @param {Array} arr - The array to be partitioned
 * @param {number} low - The starting index of the portion to be partitioned
 * @param {number} high - The ending index of the portion to be partitioned
 * @returns {number} The final index of the pivot
 */
const partition = (arr, low, high) => {
    const pivot = arr[high]
    // The index of smaller element
    let i = low - 1

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    // Place the pivot in its correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]

    return i + 1
}