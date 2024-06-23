/**
 * Heap Sort (Max-Heap Ver.)
 * 1. Build max-heap
 * 2. Repeatedly extract max element and restore heap property
 * 
 * Time Complexity: O(n log n)
 * 
 * @param {Array} arr - The array to be sorted
 * @returns {Array} The sorted array
 */
export default heapSort = (arr) => {
    let heapSize = arr.length - 1

    buildMaxHeap(arr)

    // no need to maxHeapify while only one number left
    for (let i = heapSize; i > 0; i--) {
        // swap the largest number (index 0) to last
        [arr[0], arr[i]] = [arr[i], arr[0]]
        // last number is sorted
        heapSize--
        maxHeapify(arr, 0, heapSize)
    }

    return arr
}

/**
 * Build a max-heap from the array
 * @param {Array} arr - The array to be turned into a max-heap
 */
const buildMaxHeap = (arr) => {
    const length = arr.length

    // start from the last non-leaf node
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i, length - 1)
    }
}

/**
 * Max-heapify function to maintain max-heap property
 * @param {Array} arr - The array being heapified
 * @param {number} i - The index of the root of the subtree
 * @param {number} heapSize - The size of the heap
 */
const maxHeapify = (arr, i, heapSize) => {
    // set left and right child index
    const l = 2 * i + 1, r = 2 * i + 2
    let largest = i

    if (l <= heapSize && arr[l] > arr[largest]) largest = l
    if (r <= heapSize && arr[r] > arr[largest]) largest = r

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        // recursively max-heapify the affected subtree
        maxHeapify(arr, largest, heapSize)
    }
}