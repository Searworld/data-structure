
function mergeSort(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if (len === 1) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];

    while (left.length>0 && right.length>0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    /* 当左右数组长度不等.将比较完后剩下的数组项链接起来即可 */
    return result.concat(left).concat(right);

}
var array = [11, 43, 24, 76, 89, 43, 65]

console.log(mergeSort(array))