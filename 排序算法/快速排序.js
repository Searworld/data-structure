// 分而治之
// 找主元

//子级划分
// function quickSort(arr) {
//     if (arr.length <= 1) return
//     var pivotIndex = Math.floor(arr.length / 2)
//     var piovot = arr.splice(pivotIndex, 1)[0] //选取基值
//     var left = []
//     var right = []
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] < piovot) {
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return quickSort(left).concat([pivot], quickSort(right));
// }
// var array = [8,7,0,7,5,2,5,3,1];
// quickSort(array);


function quickSort(array) {
    // 交换元素位置
    function swap(array, i, k) {
        var temp = array[i];
        array[i] = array[k];
        array[k] = temp;
    }
    // 数组分区，左小右大
    function partition(array, left, right) {
        var storeIndex = left;
        var pivot = array[right]; // 直接选最右边的元素为基准元素
        for (var i = left; i < right; i++) {
            if (array[i] < pivot) {
                swap(array, storeIndex, i);
                storeIndex++; // 交换位置后，storeIndex 自增 1，代表下一个可能要交换的位置
            }
        }
        swap(array, right, storeIndex); // 将基准元素放置到最后的正确位置上
        return storeIndex;//storeIndex 的值就是基准元素的最终位置
    }
    function sort(array, left, right) {
        if (left > right) {
            return;
        }
        var storeIndex = partition(array, left, right);
        sort(array, left, storeIndex - 1);  //递归左部分
        sort(array, storeIndex + 1, right); // 递归右部分
    }
    sort(array, 0, array.length - 1);
    return array;
}

var array = [11, 43, 24, 76, 89, 43, 65]

console.log(quickSort(array))