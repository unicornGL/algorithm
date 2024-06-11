/**
 * Selection Sort
 * -> Find the smallest number and move to the end of sorted numbers
 * Time Complexity = n(n-1)/2 ~= O(n²)
 */

export default selectionSort = (arr) => {
    const length = arr.length

    for (let i = 0; i < length - 1; i++) {
        // find smallest
        let minIndex = i
        for (let j = i; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        // exchange w/ curr
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }

    return arr
}