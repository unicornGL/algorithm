/**
 * Heap Sort (Max-Heap Ver.)
 * This algorithm sorts an array by first building a max heap from the input data,
 * then repeatedly extracting the maximum element from the heap and rebuilding the heap.
 * 
 * Algorithm steps:
 * 1. Build a max heap from the input data
 * 2. Swap the root (maximum element) with the last element of the heap
 * 3. Reduce the size of the heap by 1 and heapify the root
 * 4. Repeat steps 2-3 until the heap size is 1
 * 
 * Time Complexity:
 * - Average case: O(n log n)
 *   Building the initial heap takes O(n) time.
 *   The heapify operation is called n-1 times, each taking O(log n) time.
 * - Worst case: O(n log n)
 *   The worst case is the same as the average case because the time complexity
 *   is not dependent on the input data distribution.
 * - Best case: O(n log n)
 *   Even if the input is already sorted, the algorithm still needs to build 
 *   the heap and perform the heapify operations.
 * 
 * The time complexity can be broken down as follows:
 * 1. Building the heap: O(n)
 * 2. Heapify operations: O(n log n)
 * Total: O(n) + O(n log n) = O(n log n)
 * 
 * Space Complexity: O(1) as it sorts in-place
 * 
 * @param {Array} arr - The array to be sorted
 * @returns {Array} The sorted array
 */
export default heapSort = (arr) => {
    let heapSize = arr.length - 1

    buildMaxHeap(arr)

    // No need to maxHeapify while only one number left
    for (let i = heapSize; i > 0; i--) {
        // Swap the largest number (index 0) to last
        [arr[0], arr[i]] = [arr[i], arr[0]]
        // Last number is sorted
        heapSize--
        maxHeapify(arr, 0, heapSize)
    }

    return arr
}

/**
 * Build a max-heap from the array
 * 
 * @param {Array} arr - The array to be turned into a max-heap
 */
const buildMaxHeap = (arr) => {
    const length = arr.length

    // Start from the last non-leaf node
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i, length - 1)
    }
}

/**
 * Max-heapify function to maintain max-heap property
 * 
 * @param {Array} arr - The array being heapified
 * @param {number} i - The index of the root of the sub-tree
 * @param {number} heapSize - The size of the heap
 */
const maxHeapify = (arr, i, heapSize) => {
    // Set left and right child index
    const l = 2 * i + 1, r = 2 * i + 2
    let largest = i

    if (l <= heapSize && arr[l] > arr[largest]) largest = l
    if (r <= heapSize && arr[r] > arr[largest]) largest = r

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        // Recursively max-heapify the affected sub-tree
        maxHeapify(arr, largest, heapSize)
    }
}