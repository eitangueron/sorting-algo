// recives an unsorted ints arr and sortes it using quick sort algorhtim 
// returns an obbject with the sorted array and the animations commands for the visualiztation

const quickSort = (arr, l = 0, r = arr.length - 1, animations = []) => {
    if (l < r) {
        let p = partition(arr, l, r, animations)
        quickSort(arr, l, p - 1, animations)
        quickSort(arr, p + 1, r, animations)
    }
    return {
        sortedArr: arr,
        animations: animations
    }
}

const partition = (arr, l, r, animations) => {
    const pivot = arr[r]
    let k = l - 1
    for (let i = l; i < r; i++) {
        animations.push([i, r]) //indexes compared - marking
        animations.push([i, r]) //indexes compared - unmarking
        if (arr[i] < pivot) {
            k++
            swap(arr, k, i)
            animations.push([i, k, true]) //indexes compared - swapping values if true
        } else {
            animations.push([i, i, false]) //indexes compared - swapping values if true
        }
    }
    k++
    swap(arr, k, r)
    animations.push([k, r])
    animations.push([k, r])
    animations.push([k, r, true])
    return k
}

const swap = (arr, i, j) => {
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
}


export default quickSort;

//tester:
// const testArr = [2, 65, 23, 43, 222, 33, 25, 3]
// console.log(quickSort(testArr))