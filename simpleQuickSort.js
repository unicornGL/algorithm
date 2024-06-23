/**
 * Simple Quick Sort
 * This algorithm sorts an array by recursively partitioning it around a pivot element,
 * creating new sub-arrays for elements smaller and larger than the pivot.
 * 
 * Algorithm steps:
 * 1. Choose a pivot element (typically the first or last element of the array).
 * 2. Create two new arrays: one for elements smaller than the pivot, one for elements larger.
 * 3. Partition the original array, placing elements into the appropriate new array.
 * 4. Recursively apply steps 1-3 to the sub-arrays.
 * 5. Concatenate the sorted left array, pivot, and sorted right array.
 * 
 * Time Complexity:
 * - Average case: O(n log n) when the pivot divides the array into nearly equal halves.
 * - Worst case: O(n²) occurs when the array is already sorted.
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
 * - Average case: O(n log n) due to creating new sub-arrays at each recursion level.
 * - Worst case: O(n²) if the recursion doesn't divide the array evenly.
 * 
 * Note: While the time complexity is similar to in-place Quick Sort, 
 * the space complexity is significantly higher due to the creation of new arrays at each step.
 * 
 * @param {Array} arr - The array to be sorted
 * @returns {Array} The sorted array
 */
export default simpleQuickSort = (arr) => {
    const length = arr.length

    if (length <= 1) return arr

    let pivot = arr[0]
    let leftArr = [], rightArr = []

    for (let i = 1; i < length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }

    return [...simpleQuickSort(leftArr), pivot, ...simpleQuickSort(rightArr)]
}