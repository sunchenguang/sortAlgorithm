/**
 * 归并排序
 * 先使每个子序列有序，再使子序列段间有序
 * 稳定
 * 复杂度： 最好，最坏，平均都是O(nlogn)
 */

function mergeSort(arr = []) {
    if (arr.length < 2) {
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}


function merge(left = [], right = []) {
    let result = []

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }


    while (left.length) {
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }
    return result
}
