//冒泡排序



// function bubbleSort(arr) {
//     var len = arr.length
//     var isSort = true; //默认是排好序（正）的
//     for (outer = len - 1; outer >= 0; outer--) {
//         for (var j = 0; j < outer; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 isSort = false    //非排好序
//             }
//         }
//         if (isSort) break;
//         num++
//     }
//     return arr
// }

// bubbleSort(array)
// console.log(array, '比较' + num + '次数')

var array = [1,2,3];
var num = 0
function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var isSort = true; //默认是排好序（正）的
        for (var j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSort = false
            }
        }
        if (isSort) break;  //如果是排序的，跳出程序
        num++

    }

    return arr;
}

bubbleSort(array)
console.log(array, '比较' + num + '次数')
// var m=0;
// // var array=[9,8,7,6,5,4,3,2,1];
// var array = [1,2,3,4,5]
// for(var i=0;i<array.length-1;i++){
//     //开闭原则中的开关
//     bool = true;
//     for(var j=0;j<array.length-1-i;j++){
//         if(array[j]>array[j+1]){
//             //交换两个变量
//             var temp=array[j];
//             array[j]=array[j+1];
//             array[j+1]=temp;
//             bool=false;//将开关关闭
//         }
//     }
//     //如果内循环中的if没有被执行（开关关闭，执行下面的语句）;
//     if(bool){
//         break;
//     }
//     m++;
// }
// console.log(array+",比较"+m+"轮");