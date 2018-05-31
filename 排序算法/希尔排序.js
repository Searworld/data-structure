var array = [11, 43, 24, 76, 89, 43, 65]

function shellSort(arr) {
    var len = arr.length; //长度
     var gap = 1
    while (gap < len / 3) {          // 动态定义间隔序列
        gap = gap * 3 + 1;
    }
    while (gap >= 1) {
        for (var i = 0; i < len; i++) {
            for (j = i; j >= gap && arr[j] < arr[j - gap]; j -= gap) {
                // 交换位置
                var temp =  arr[j-gap]
                arr[j- gap] = arr[j]
                arr[j] = temp
            }
        }
        gap = (gap-1)/3;
    }

}

shellSort(array,3)
console.log(array)