/**
 * 选择排序。每次从未排序部分选出最小值放到该部分的首位，遍历 (arr.length - 1) 次
 * 不稳定，每趟会把已有的最小的和索引为i的进行交换
 * 复杂度：最好，最坏，平均都是O(n^2)
 */


function selectSort(arr = []) {
    let len = arr.length
    let minIndex
    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        arr[i] = arr.splice(minIndex, 1, arr[i])[0]
    }
    return arr
}








