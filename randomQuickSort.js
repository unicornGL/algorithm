/**
 * Random Quick Sort
 * -> Based on Quick Sort, but randomly pick pivot to prevent largest or smallest number become pivot while in sorted array
 * Time Complexity = O(n log n)
 */

export default randomQuickSort = (arr) => {
    const length = arr.length

    if (length <= 1) return arr

    const pivotIndex = partition(arr)

    return [...randomQuickSort(arr.slice(0, pivotIndex)), arr[pivotIndex], ...randomQuickSort(arr.slice(pivotIndex + 1))]
}

const partition = (arr) => {
    const length = arr.length

    let pivotIndex = Math.floor(Math.random() * length)

    // move pivot to front
    arr.unshift(arr.splice(pivotIndex, 1)[0])

    // splitNumber is number next to pivot
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