// 建最大堆
var len; //定义成全局变量
function buildHeap(arr) {
    len = arr.length;

    for (var i = Math.floor(arr.length / 2);i>=0; i--) {
        adjustHeap(arr, i)  //调整堆
    }
}

function adjustHeap(arr, i) {
    var left = 2 * i + 1,    // 左节点位置
        right = 2 * i + 2,  //右节点位置
        largest = i; // 最大值位置

    //如果左节点存在并且左节点大于 当前最大节点，交换位置
    if (left < len && arr[left] > arr[largest]) {
        largest = left
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    //如果发现修改了，则交换位置
    if (largest !== i) {
        swap(arr, i, largest);
        adjustHeap(arr, largest)
    }

}

function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

}

// 堆排序算法
function heapSort(arr) {
    buildHeap(arr)  //建堆
    for (var i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);  //堆顶一定是最大元素，将堆顶和尾部元素交换，最大元素就保存在尾部，并且不参与后面的调整
        len--; //  去掉这个是从大到小排序
        adjustHeap(arr, 0) ///将最大的元素进行调整，将最大的元素调整到堆顶
    }
    return arr

}


var array = [11, 43, 24, 76, 89, 43, 65]
heapSort(array)
console.log(array)