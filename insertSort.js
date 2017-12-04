/**
 * 插入排序
 * 总结：类似扑克整理牌。从左到右，将右侧的牌插入到左侧合适位置，一张一张进行
 * 复杂度： 最坏是倒序的情况，O(n^2), 最好是顺序，不用进行移动，O(n)。平均时间复杂度O(n)
 */

/**
 * 有一个已排序数组，元素不断增多，参数数组元素不断减少，直到参数数组为空停止。
 * 利用splice方法直接在数组指定索引位置插入元素，不用傻傻的手动移动元素腾出空位
 * @param arr
 * @returns {Array}
 */
function insertSort(arr = []) {
    //浅复制
    arr = arr.slice()
    let sortedArr = []

    while (arr.length) {
        //拿出首项
        let item = arr.shift()

        let i = sortedArr.length - 1
        //找到比item小的那项的位置
        while (i >= 0 && sortedArr[i] > item) {
            i--
        }
        //item的插入位置是i+1
        sortedArr.splice(i + 1, 0, item)
    }
    return sortedArr
}

/**
 * 二分查找排序
 * @param arr
 * @returns {Array}
 */
function binaryInsertSort(arr = []) {
    //浅复制
    arr = arr.slice()
    let sortedArr = []

    while (arr.length) {
        //拿出首项
        let item = arr.shift()

        //left是最后的插入位置，使用二分查找找出插入位置
        let left = 0, right = sortedArr.length - 1

        while (left <= right) {
            let middle = Math.floor((left + right) / 2)
            //保证稳定，有相等的也要排在已有的后面
            if (sortedArr[middle] <= item) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        }

        sortedArr.splice(left, 0, item)
    }
    return sortedArr
}








