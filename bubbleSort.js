/**
 * 冒泡排序
 */


/**
 * 普通冒泡排序。重复遍历，每趟冒出一个最大的数字
 * 稳定，有元素相等的情况不用交换
 * 时间复杂度： 最坏O(n^2), 最好是O(n), 平均O(n^2)
 * @param arr
 */
function normalBubble(arr = []) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr.splice(j + 1, 1, arr[j])[0]
            }
        }
    }
    return arr
}

/**
 * 改进的冒泡排序。每趟遍历都记录最后一次发生交换的左位置，下一趟遍历走到这个位置为止。
 * @param arr
 * @returns {Array}
 */
function improvedBubble(arr = []) {
    //i为最后一次发生交换的位置
    let i = arr.length - 1
    while (i > 0) {
        //设定每趟开始时无记录交换, 需要一个临时变量记录这趟最后一次发生交换的位置，如果直接i=j, 那么循环的判断条件会改变
        let pos = 0
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr.splice(j + 1, 1, arr[j])[0]

                pos = j
            }
        }
        //临时变量再次赋予
        i = pos
    }

    return arr
}





