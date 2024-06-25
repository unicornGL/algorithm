import bubbleSort from './bubbleSort'
import selectionSort from './selectionSort'
import insertionSort from './insertionSort'
import mergeSort from './mergeSort'
import simpleQuickSort from './simpleQuickSort'
import inPlaceQuickSort from './inPlaceQuickSort'
import randomQuickSort from './randomQuickSort'
import heapSort from './heapSort'
import countingSort from './countingSort'
import radixSort from './radixSort'

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

describe('mergeSort test', () => {
    test('empty array', () => {
        expect(mergeSort([])).toEqual([])
    })

    test('single number array', () => {
        expect(mergeSort([5])).toEqual([5])
    })

    test('sorted array', () => {
        expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })

    test('reversed sorted array', () => {
        expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test('array w/ duplicate numbers', () => {
        expect(mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9])
    })

    test('array w/ negative numbers', () => {
        expect(mergeSort([-3, 0, 1, -10, 5])).toEqual([-10, -3, 0, 1, 5])
    })

    test('large array', () => {
        const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000))
        const sortedArray = [...largeArray].sort((a, b) => a - b)

        expect(mergeSort(largeArray)).toEqual(sortedArray)
    })
})

describe('simpleQuickSort test', () => {
    test('empty array', () => {
        expect(simpleQuickSort([])).toEqual([])
    })

    test('single number array', () => {
        expect(simpleQuickSort([5])).toEqual([5])
    })

    test('sorted array', () => {
        expect(simpleQuickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })

    test('reversed sorted array', () => {
        expect(simpleQuickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test('array w/ duplicate numbers', () => {
        expect(simpleQuickSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9])
    })

    test('array w/ negative numbers', () => {
        expect(simpleQuickSort([-3, 0, 1, -10, 5])).toEqual([-10, -3, 0, 1, 5])
    })

    test('large array', () => {
        const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000))
        const sortedArray = [...largeArray].sort((a, b) => a - b)

        expect(simpleQuickSort(largeArray)).toEqual(sortedArray)
    })
})

describe('inPlaceQuickSort test', () => {
    test('empty array', () => {
        expect(inPlaceQuickSort([])).toEqual([])
    })

    test('single number array', () => {
        expect(inPlaceQuickSort([5])).toEqual([5])
    })

    test('sorted array', () => {
        expect(inPlaceQuickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })

    test('reversed sorted array', () => {
        expect(inPlaceQuickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test('array w/ duplicate numbers', () => {
        expect(inPlaceQuickSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9])
    })

    test('array w/ negative numbers', () => {
        expect(inPlaceQuickSort([-3, 0, 1, -10, 5])).toEqual([-10, -3, 0, 1, 5])
    })

    test('large array', () => {
        const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000))
        const sortedArray = [...largeArray].sort((a, b) => a - b)

        expect(inPlaceQuickSort(largeArray)).toEqual(sortedArray)
    })
})

describe('randomQuickSort test', () => {
    test('empty array', () => {
        expect(randomQuickSort([])).toEqual([])
    })

    test('single number array', () => {
        expect(randomQuickSort([5])).toEqual([5])
    })

    test('sorted array', () => {
        expect(randomQuickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })

    test('reversed sorted array', () => {
        expect(randomQuickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test('array w/ duplicate numbers', () => {
        expect(randomQuickSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9])
    })

    test('array w/ negative numbers', () => {
        expect(randomQuickSort([-3, 0, 1, -10, 5])).toEqual([-10, -3, 0, 1, 5])
    })

    test('large array', () => {
        const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000))
        const sortedArray = [...largeArray].sort((a, b) => a - b)

        expect(randomQuickSort(largeArray)).toEqual(sortedArray)
    })
})

describe('heapSort test', () => {
    test('empty array', () => {
        expect(heapSort([])).toEqual([])
    })

    test('single number array', () => {
        expect(heapSort([5])).toEqual([5])
    })

    test('sorted array', () => {
        expect(heapSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })

    test('reversed sorted array', () => {
        expect(heapSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test('array w/ duplicate numbers', () => {
        expect(heapSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9])
    })

    test('array w/ negative numbers', () => {
        expect(heapSort([-3, 0, 1, -10, 5])).toEqual([-10, -3, 0, 1, 5])
    })

    test('large array', () => {
        const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000))
        const sortedArray = [...largeArray].sort((a, b) => a - b)

        expect(heapSort(largeArray)).toEqual(sortedArray)
    })
})

describe('countingSort test', () => {
    test('empty array', () => {
        expect(countingSort([])).toEqual([])
    })

    test('single number array', () => {
        expect(countingSort([5])).toEqual([5])
    })

    test('sorted array', () => {
        expect(countingSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })

    test('reversed sorted array', () => {
        expect(countingSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test('array w/ duplicate numbers', () => {
        expect(countingSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9])
    })

    test('array w/ negative numbers', () => {
        expect(countingSort([-3, 0, 1, -10, 5])).toEqual([-10, -3, 0, 1, 5])
    })

    test('large array', () => {
        const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000))
        const sortedArray = [...largeArray].sort((a, b) => a - b)

        expect(countingSort(largeArray)).toEqual(sortedArray)
    })
})

describe('radixSort test', () => {
    test('empty array', () => {
        expect(radixSort([])).toEqual([])
    })

    test('single number array', () => {
        expect(radixSort([5])).toEqual([5])
    })

    test('sorted array', () => {
        expect(radixSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })

    test('reversed sorted array', () => {
        expect(radixSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test('array w/ duplicate numbers', () => {
        expect(radixSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9])
    })

    test('array w/ negative numbers', () => {
        expect(radixSort([-3, 0, 1, -10, 5])).toEqual([-10, -3, 0, 1, 5])
    })

    test('large array', () => {
        const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000))
        const sortedArray = [...largeArray].sort((a, b) => a - b)

        expect(radixSort(largeArray)).toEqual(sortedArray)
    })
})