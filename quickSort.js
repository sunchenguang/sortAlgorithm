/**
 * 快速排序
 */


/**
 * 找到中心点索引，比他小的元素放到left, 比他大的放到right,  递归进行
 * @param arr
 * @returns {*}
 */
function quickSort(arr = []) {
    if (arr.length <= 1) {
        return arr
    }

    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = [], right = []

    arr.forEach((item) => {
        if (item < pivot) {
            left.push(item)
        } else {
            right.push(item)
        }
    })
    return quickSort(left).concat(pivot).concat(quickSort(right))
}





