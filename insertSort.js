/**
 * 插入排序
 * 总结：类似扑克整理牌。从左到右，将右侧的牌插入到左侧合适位置，一张一张进行
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











