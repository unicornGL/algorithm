/**
 * In-place Quick Sort
 * -> 
 * Time Complexity = O(n log n)
 */

export default inPlaceQuickSort = (arr) => {
    const length = arr.length

    if (length <= 1) return arr

    const pivotIndex = partition(arr)

    return [...inPlaceQuickSort(arr.slice(0, pivotIndex)), arr[pivotIndex], ...inPlaceQuickSort(arr.slice(pivotIndex + 1))]
}

const partition = (arr) => {
    const length = arr.length

    // assume pivot is first number, then splitNumber is number next to pivot
    let splitIndex = 1

    for (let i = 1; i < length; i++) {
        if (arr[i] < arr[0]) {
            // move number smaller than pivot to the left of splitIndex
            [arr[splitIndex], arr[i]] = [arr[i], arr[splitIndex]]
            // make splitIndex the first number larger than pivot
            ++splitIndex
        }
    }

    // swap pivot w/ the last number smaller than pivot
    [arr[0], arr[splitIndex - 1]] = [arr[splitIndex - 1], arr[0]]

    return splitIndex - 1
}