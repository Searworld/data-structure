// 题目描述
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

function Stack() {
    this.dataStore = []
    this.push = function (item) {
        return this.dataStore.push(item)
    }
    this.pop = function () {
        return this.dataStore.pop()
    }
    this.isEmpty = function () {
        return this.dataStore === 0
    }
}
var enStack = new Stack()
var outStack = new Stack()
// 入栈
 function push(element) {
 
    return enStack.push(element)
 }
 
 function pop() {
     if(enStack.isEmpty() && outStack.isEmpty()) {
         throw new Error('队列是空滴')
     }
     if(outStack.isEmpty()) {
        while(!enStack.isEmpty()) {
            outStack.push(enStack.pop())
        }
     }
     return outStack.pop()
 }
console.log(enStack)
console.log(outStack)