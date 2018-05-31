
// 栈
function Stack() {
    this.top = 0
    this.dataStore = []
    this.push = push
    this.pop = pop
    this.length = length
}

function push(element) {
    return this.dataStore[this.top++] =element
}

function pop() {
    return this.dataStore[--this.top]
}
function length() {
    return this.top
}

function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base); //余数
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}
var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);