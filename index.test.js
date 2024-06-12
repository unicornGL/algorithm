import selectionSort from './selectionSort'
import bubbleSort from './bubbleSort'
import insertionSort from './insertionSort'

describe('selectionSort test', () => {
    test('empty array', () => {
        expect(selectionSort([])).toEqual([])
    })

    test('single number array', () => {
        expect(selectionSort([5])).toEqual([5])
    })

    test('sorted array', () => {
        expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })

    test('reversed sorted array', () => {
        expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test('array w/ duplicate numbers', () => {
        expect(selectionSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9])
    })

    test('array w/ negative numbers', () => {
        expect(selectionSort([-3, 0, 1, -10, 5])).toEqual([-10, -3, 0, 1, 5])
    })

    test('large array', () => {
        const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000))
        const sortedArray = [...largeArray].sort((a, b) => a - b)

        expect(selectionSort(largeArray)).toEqual(sortedArray)
    })
})

describe('bubbleSort test', () => {
    test('empty array', () => {
        expect(bubbleSort([])).toEqual([])
    })

    test('single number array', () => {
        expect(bubbleSort([5])).toEqual([5])
    })

    test('sorted array', () => {
        expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })

    test('reversed sorted array', () => {
        expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test('array w/ duplicate numbers', () => {
        expect(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9])
    })

    test('array w/ negative numbers', () => {
        expect(bubbleSort([-3, 0, 1, -10, 5])).toEqual([-10, -3, 0, 1, 5])
    })

    test('large array', () => {
        const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000))
        const sortedArray = [...largeArray].sort((a, b) => a - b)

        expect(bubbleSort(largeArray)).toEqual(sortedArray)
    })
})

describe('insertionSort test', () => {
    test('empty array', () => {
        expect(insertionSort([])).toEqual([])
    })

    test('single number array', () => {
        expect(insertionSort([5])).toEqual([5])
    })

    test('sorted array', () => {
        expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })

    test('reversed sorted array', () => {
        expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test('array w/ duplicate numbers', () => {
        expect(insertionSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9])
    })

    test('array w/ negative numbers', () => {
        expect(insertionSort([-3, 0, 1, -10, 5])).toEqual([-10, -3, 0, 1, 5])
    })

    test('large array', () => {
        const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000))
        const sortedArray = [...largeArray].sort((a, b) => a - b)

        expect(insertionSort(largeArray)).toEqual(sortedArray)
    })
})