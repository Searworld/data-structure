var array = [11, 43, 24, 76, 89, 43, 65]
function selectionSort(arr) {

    var len = arr.length
    var minIndex, temp

    for (var i = 0; i < len - 1; i++) {  //循环的次数
        minIndex = i
        for (var j = i + 1; j < len; j++) {  //每一次的循环
            if(arr[j] < arr[minIndex]) {     //找到最小值
                                              //交换位置
                  temp = arr[minIndex]
                   arr[minIndex] = arr[j]
                   arr[j] = temp

            }
        }
    }
    return arr
}
selectionSort(array)
console.log(array)  //[ 11, 24, 43, 43, 65, 76, 89 ]
