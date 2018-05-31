// 所谓”深拷贝”，就是能够实现真正意义上的数组和对象的拷贝。它的实现并不难，只要递归调用”浅拷贝”就行了
// javascript中存储对象都是存地址的，所以浅拷贝是都指向同一块内存区块，而深拷贝则是另外开辟了一块区域

var fatherVal = {
    eye:"big",
    hair: "black",
}


//给爸爸加上旅游过的地方的属性
fatherVal.travelPlace = ['北京','上海','香港'];

function deepCopy(father,son) {
    var son = son || {}

    for(var key in father) {
        if(father.hasOwnProperty(key)){
            if(typeof father[key] === 'object') {
                son[key] = father[key].constructor === Array ? [] : {}
                deepCopy(father[key],son[key])
            }else {
                son[key] = father[key]
            }
        }

    }
    return son
}

var sonVal = deepCopy(fatherVal)

// 在儿子的旅游的地方加了广东，发现  爸爸 旅游过的地方 也多了广东，但爸爸并没有去过
// 儿子获得的只是一个内存地址，而不是真正拷贝，因此存在爸爸的数据被篡改的可能。
sonVal.travelPlace.push("广东")


console.log(sonVal)
console.log(fatherVal)
