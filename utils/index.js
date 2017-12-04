/**
 * 生成指定范围[min, max]，指定数目的随机数数组
 * @param min
 * @param max
 * @param amount
 * @returns {Array}
 */
function generateRandomNumber(min = 0, max = 100, amount = 10) {
    let arr = []
    for (let i = 0; i < amount; i++) {
        let item = Math.floor(Math.random() * (max - min + 1)) + min
        arr.push(item)
    }

    return arr
}

/**
 * 判断arr数组是否已经被排好序
 * @param arr
 * @returns {boolean}
 */
function judgeIsSorted(arr = []) {
    let tmp = arr.slice()

    tmp.sort((a, b) => {
        return a - b
    })

    //tmp与arr完全一致说明是排好序的
    return tmp.every((item, index) => {
        return item === arr[index]
    })
}


/**
 * 美化数组展示
 * @param arr
 * @param connector
 */
function beautifyArrDisplay(arr, connector = '，') {
    return arr.join(connector)
}






