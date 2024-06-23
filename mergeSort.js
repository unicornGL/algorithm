/**
 * Merge Sort
 * This algorithm sorts an array by recursively dividing it into two halves, sorting them and then merging the sorted halves.
 * 
 * Algorithm steps:
 * 1. Divide the unsorted array into two halves.
 * 2. Recursively apply Merge Sort to both halves.
 * 3. Merge the two sorted halves to produce a single sorted array.
 * 
 * Time Complexity:
 * - Average case: O(n log n)
 * - Worst case: O(n log n)
 * - Best case: O(n log n)
 * 
 * The time complexity can be broken down as follows:
 * 1. Dividing: O(log n) for the array is divided into halves log n times
 * 2. Merging: O(n) for each level of recursion processes all n elements
 * 3. Total time: O(n) * O(log n) = O(n log n)
 * 
 * Space Complexity:
 * - O(n) additional space for merging and temporary arrays
 * 
 * Note: Merge Sort has a consistent O(n log n) time complexity for all cases, making it efficient for large datasets. 
 * However, it requires additional space proportional to the input size.
 * 
 * @param {Array} arr - The array to be sorted
 * @returns {Array} The sorted array
 */
export default mergeSort = (arr) => {
    const length = arr.length

    if (length <= 1) return arr

    const midIndex = Math.floor(length / 2)

    const leftArr = mergeSort(arr.slice(0, midIndex))
    const rightArr = mergeSort(arr.slice(midIndex))

    return merge(leftArr, rightArr)
}

/**
 * Merges two sorted arrays into a single sorted array
 * 
 * @param {Array} leftArr - The left sorted array
 * @param {Array} rightArr - The right sorted array
 * @returns {Array} The merged sorted array
 */
const merge = (leftArr, rightArr) => {
    let mergedArr = []

    while (leftArr.length !== 0 && rightArr.length !== 0) {
        if (leftArr[0] < rightArr[0]) {
            mergedArr.push(leftArr.shift())
        } else {
            mergedArr.push(rightArr.shift())
        }
    }

    while (leftArr.length !== 0) {
        mergedArr.push(leftArr.shift())
    }

    while (rightArr.length !== 0) {
        mergedArr.push(rightArr.shift())
    }

    return mergedArr
}