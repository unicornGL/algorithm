/**
 * Merge Sort
 * -> Recursively separate to left and right array, then sort and join 
 * Time Complexity = (n - 1) + n log n = O(n log n)
 *              separate↲         ↳merge
 */

export default mergeSort = (arr) => {
    const length = arr.length

    if (length <= 1) return arr

    const midIndex = Math.floor(length / 2)

    const leftArr = mergeSort(arr.slice(0, midIndex))
    const rightArr = mergeSort(arr.slice(midIndex))

    return merge(leftArr, rightArr)
}

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