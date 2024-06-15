/**
 * Insertion Sort
 * -> Find correct place to insert
 * Time Complexity = O(n²)
 * if best case, Time Complexity = O(n)
 */

export default insertionSort = (arr) => {
    const length = arr.length

    // first number no need to move, so i start from 1
    for (let i = 1; i < length; i++) {
        const curr = arr[i]
        let p = i - 1

        // move numbers till find a place to insert current number
        while (p >= 0 && arr[p] > curr) {
            arr[p + 1] = arr[p]
            p--
        }

        // insert
        arr[p + 1] = curr
    }

    return arr
}