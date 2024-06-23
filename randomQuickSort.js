/**
 * Random Quick Sort
 * This algorithm is Based on Quick Sort but randomly pick pivot to prevent worst-case scenarios,
 * where the largest or smallest element becomes the pivot in an already sorted or nearly sorted array.
 * 
 * Algorithm steps:
 * 1. Randomly select a pivot element from the array.
 * 2. Partition the array around the pivot: elements smaller than the pivot go to the left, larger to the right.
 * 3. Recursively apply steps 1-2 to the sub-arrays on the left and right of the pivot.
 * 
 * Time Complexity:
 * - Average case: O(n log n) while the random pivot selection usually results in balanced partitions.
 * - Worst case: O(n²) occurs if we consistently choose the smallest or largest element as the pivot.
 * - Best case: O(n log n) when the pivot consistently divides the array into nearly equal halves.
 * 
 * The time complexity can be broken down as follows:
 * 1. Partitioning: O(n) for each level of recursion
 * 2. Number of recursion levels:
 *    - Average and Best case: O(log n) levels
 *    - Worst case: O(n) levels
 * 3. Total time:
 *    - Average and Best case: O(n) * O(log n) = O(n log n)
 *    - Worst case: O(n) * O(n) = O(n²)
 * 
 * Space Complexity:
 * - Average case: O(log n) for the recursive call stack.
 * - Worst case: O(n) if the recursion doesn't divide the array evenly.
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