// 浅拷贝
//拷贝就是把父对像的属性，全部拷贝给子对象

var father = {
    eye:"big",
    hair: "black",
}

//给爸爸加上旅游过的地方的属性
father.travelPlace = ['北京','上海','香港'];
function extendCopy(obj) {
    const other = {}
    for (var key in obj) {
        other[key] = obj[key]
    }
    return other
}

var son = extendCopy(father)

// 在儿子的旅游的地方加了广东，发现  爸爸 旅游过的地方 也多了广东，但爸爸并没有去过
// 儿子获得的只是一个内存地址，而不是真正拷贝，因此存在爸爸的数据被篡改的可能。
son.travelPlace.push("广东")


console.log(son)
console.log(father)
