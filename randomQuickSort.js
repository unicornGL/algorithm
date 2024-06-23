/**
 * Random Quick Sort
 * This algorithm is Based on Quick Sort but randomly pick pivot to prevent worst-case scenarios,
 * where the largest or smallest element becomes the pivot in an already sorted or nearly sorted array.
 * 
 * Time Complexity:
 * - Average case: O(n log n)
 * - Worst case: O(n²) (rare due to random pivot selection)
 * - Best case: O(n log n)
 * 
 * @param {Array} arr - The array to be sorted
 * @returns {Array} The sorted array
 */
export default randomQuickSort = (arr) => {
    const length = arr.length

    if (length <= 1) return arr

    const pivotIndex = partition(arr)

    return [...randomQuickSort(arr.slice(0, pivotIndex)), arr[pivotIndex], ...randomQuickSort(arr.slice(pivotIndex + 1))]
}

/**
 * Partitions the array around a randomly chosen pivot
 * 
 * @param {Array} arr - The array to be partitioned
 * @returns {number} The final index of the pivot
 */
const partition = (arr) => {
    const length = arr.length

    // Select pivot randomly
    let pivotIndex = Math.floor(Math.random() * length)

    // Move pivot to front
    arr.unshift(arr.splice(pivotIndex, 1)[0])

    // SplitNumber is number next to pivot
    let splitIndex = 1

    for (let i = 1; i < length; i++) {
        if (arr[i] < arr[0]) {
            // Move number smaller than pivot to the left of splitIndex
            [arr[splitIndex], arr[i]] = [arr[i], arr[splitIndex]]
            // Make splitIndex the first number larger than pivot
            ++splitIndex
        }
    }

    // Swap pivot w/ the last number smaller than pivot
    [arr[0], arr[splitIndex - 1]] = [arr[splitIndex - 1], arr[0]]

    return splitIndex - 1
}