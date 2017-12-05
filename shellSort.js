/**
 * 希尔排序.它交换不相邻的元素对数组进行局部排序，并最终用插入排序将局部有序的数组进行排序。
 * 不稳定
 * 复杂度： 平均时间复杂度 O(nlogn)，最好和最坏是O(n(logn)^2)
 */



function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while (gap < len / 5) {          //动态定义间隔序列
        gap = gap * 5 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 5)) {
        //从gap往后自增，是跑完所有元素，但里面是比较每个元素所在的子数组（交换不相邻的元素），符合预期
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}




