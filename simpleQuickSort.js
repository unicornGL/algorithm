/**
 * Simple Quick Sort
 * -> Recursively set a pivot, put numbers smaller than pivot in left array and numbers larger than pivot in right array, than merge
 * Time Complexity = O(n log n), but Space Complexity is larger than in-place version
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