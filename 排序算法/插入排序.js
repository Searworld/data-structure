var array = [1,2,3]

function insertionSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        //i : 未排序部分的当前位置

        value = arr[i]   // 准备插入的值（新牌）

        // j: 已排序部分的当前位置
        //  var j = i - 1 , 已经排好序最后一个元素位置

        //如果当已排序部分的当前元素大于value
        for (var j = i - 1; j > -1 && arr[j] > value; j--) {

            arr[j + 1] = arr[j]    //将当前元素向后移一位，再将前一位与value比较
        }


        //否则直接插入,新牌落位
        arr[j + 1] = value

    }
    return arr
}

insertionSort(array)
console.log(array)