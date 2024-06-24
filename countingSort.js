/**
 * Counting Sort
 * This algorithm sorts an array by counting the occurrences of each element,
 * then using this information to place elements in their correct sorted positions.
 * This implementation can handle both positive and negative integers.
 * 
 * Algorithm steps:
 * 1. Find the range of input elements (minimum to maximum)
 * 2. Create a counting array to store the count of each unique element
 * 3. Count the occurrences of each element
 * 4. Reconstruct the sorted array using the counting information
 * 
 * Time Complexity:
 * - Average case: O(n + k) where n is the number of elements and k is the range of input
 * - Worst case: O(n + k)
 * - Best case: O(n + k)
 * 
 * The time complexity can be broken down as follows:
 * 1. Finding the minimum and maximum elements: O(n)
 * 2. Counting occurrences: O(n)
 * 3. Reconstructing the sorted array: O(n + k)
 * Total: O(n) + O(n) + O(n + k) = O(n + k)
 * 
 * Space Complexity: O(k) for the counting array, where k is the range of input (max - min + 1)
 * 
 * Note: Counting Sort offers several advantages:
 * 1. Linear time complexity when k is not significantly larger than n
 * 2. Stable sorting algorithm (equal elements maintain their relative order)
 * 3. Efficient for datasets with small ranges of integers
 * 4. Can handle both positive and negative integers
 * 
 * However, it has limitations:
 * 1. Not suitable for large ranges of input (large k) as it requires O(k) extra space
 * 2. Not an in-place sorting algorithm in its standard form
 * 3. Less efficient for sparse datasets with a large range but few elements
 * 
 * @param {Array} arr - The array to be sorted (can contain both positive and negative integers)
 * @returns {Array} The sorted array
 */
export default countingSort = (arr) => {
    if (!arr.length) return []

    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const range = max - min + 1
    const countedArr = Array(range).fill(0)

    // Count the occurrences of each element
    for (let num of arr) {
        countedArr[num - min]++
    }

    // Reconstruct the sorted array
    let writeIndex = 0
    for (let i = 0; i < range; i++) {
        while (countedArr[i] > 0) {
            arr[writeIndex] = i + min
            writeIndex++
            countedArr[i]--
        }
    }

    return arr
}