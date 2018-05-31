// 基础列表类
var list = function () {


    //更新长度、清空列表元素、字符串形式返回列表、返回当前位置元素、当前元素后插入新元素、列表末尾添加新元素、列表中删除元素
    //当前位置移动到第一个、当前位置移动到最后一个、当前位置后移一位、当前位置后移一位、返回列表当前位置、当前位置移动到指定位置
    //列表中包含当前元素、查找元素、获取列表长度

    this.dataStore = []; // 初始化一个空数组来保存列表元素
    this.listSize = this.dataStore.length; //数组长度
    this.pos = 0; //列表的当前位置
    //更新长度
    this.updateLength = function () {
        this.listSize = this.dataStore.length
    }
    //清空列表元素
    this.clear = function () {
        delete this.dataStore
    }
    //字符串形式返回列表元素
    this.toString = function () {
        return this.dataStore
    }
    //返回当前位置元素
    this.getElement = function () {
        return this.dataStore[this.pos] || '没找到'
    }
    //查找元素
    this.find = function (element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (element === this.dataStore[i]) {
                return i
            }
        }
    }

    //当前元素后插入新元素
    this.insert = function (element, after) {
        this.foundAfterAt = this.find(after)
        if (this.foundAfterAt > -1) {
            this.dataStore.splice(this.foundAfterAt + 1, 0, element)
            return true
        }
        return false
    }
    //列表末尾添加新元素
    this.append = function () {
        this.dataStore[this.listSize++] = element
    }
    //列表中删除元素
    this.remove = function (element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }
    //获得列表长度
    this.length = function () {
        return this.listSize
    }
}
console.log(new list())

