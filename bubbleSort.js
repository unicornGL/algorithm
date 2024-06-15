/**
 * Bubble Sort
 * -> Move the largest number to bottom
 * Time Complexity = n ( n - 1 - i ) / 2 = O(n²)
 * if best case, Time Complexity = O(n)
 */

export default bubbleSort = (arr) => {
    const length = arr.length

    let swapped = true

    for (let i = 0; i < length && swapped; i++) {
        // if all numbers are sorted, than no need to swap
        swapped = false
        for (let j = 0; j < length - 1 - i; j++) {
            // swap if curr is larger than next
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true
            }
        }
    }

    return arr
}
