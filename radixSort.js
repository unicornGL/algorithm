/**
 * Radix Sort
 * This algorithm sorts an array by processing each digit position, from least significant to most significant.
 * This implementation can handle both positive and negative integers by using an offset.
 * 
 * Algorithm steps:
 * 1. Find the minimum value and calculate an offset to make all numbers non-negative
 * 2. Apply the offset to all numbers
 * 3. Find the maximum number of digits in the offset array
 * 4. For each digit position (from least to most significant):
 *    a. Distribute the numbers into 10 buckets based on the current digit
 *    b. Collect the numbers from the buckets, maintaining their order
 * 5. Remove the offset from all numbers to restore the original values
 * 
 * Time Complexity:
 * - Average case: O(k * (n + b)) where n is the number of elements, k is the number of digits, and b is the base (10 in this case)
 * - Worst case: O(k * (n + b))
 * - Best case: O(k * (n + b))
 * 
 * The time complexity can be broken down as follows:
 * 1. Finding min and applying offset: O(n)
 * 2. Counting max digits: O(n)
 * 3. Digit-by-digit sorting: O(k * (n + b))
 * Total: O(n) + O(n) + O(k * (n + b)) = O(k * (n + b))
 * 
 * Space Complexity: O(n + k), where n is for the offsetArr and k is for the digitBuckets
 * 
 * Note: Radix Sort offers several advantages:
 * 1. Stable sorting algorithm (equal elements maintain their relative order)
 * 2. Can be faster than comparison-based sorting algorithms for integers with a small number of digits
 * 3. Can handle both positive and negative integers with the offset technique
 * 
 * However, it has limitations:
 * 1. Not suitable for floating-point numbers without modification
 * 2. Performance depends on the number of digits in the largest number
 * 3. Requires extra space for buckets and the offset array
 * 
 * @param {Array} arr - The array to be sorted (can contain both positive and negative integers)
 * @returns {Array} The sorted array
 */
export default radixSort = (arr) => {
    const minNum = Math.min(...arr)
    const offset = Math.abs(minNum) + 1

    let offsetArr = arr.map(num => num + offset)

    const maxDigit = countNumsMaxDigit(offsetArr)

    for (let k = 0; k < maxDigit; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])

        for (let i = 0; i < offsetArr.length; i++) {
            let bucketIndex = getDigitNum(offsetArr[i], k)
            digitBuckets[bucketIndex].push(offsetArr[i])
        }

        offsetArr = [...digitBuckets.flat()]
    }

    return offsetArr.map(num => num - offset)
}

/**
 * Get the k-th digit of a number (from right to left, 0-indexed)
 * @param {number} num - The number to get the digit from
 * @param {number} k - The position of the digit (0 for ones, 1 for tens, etc.)
 * @returns {number} The k-th digit of the number
 */
const getDigitNum = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10

/**
 * Count the number of digits in a number
 * @param {number} num - The number to count digits for
 * @returns {number} The number of digits
 */
const countDigit = num => num ? Math.floor(Math.log10(Math.abs(num))) + 1 : 1

/**
 * Find the maximum number of digits in an array of numbers
 * @param {Array} arr - The array of numbers
 * @returns {number} The maximum number of digits
 */
const countNumsMaxDigit = arr => arr.reduce((acc, cur) => Math.max(acc, countDigit(cur)), 0)