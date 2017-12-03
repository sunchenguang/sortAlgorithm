/**
 * 插入排序
 */


function insertSort(arr = []) {
    //浅复制一波
    arr = arr.slice()
    let sortedArr = []


    while (arr.length) {
        //拿出首项
        let item = arr.shift()

        for (let i = sortedArr.length - 1; i >= -1; i--) {
            if (sortedArr[i] < item || i === -1) {
                sortedArr.splice(i + 1, 0, item)
                break
            }
        }

    }
    return sortedArr
}











