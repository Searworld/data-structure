// 队列
function Queue() {
    this.dataStore = []
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty
}

function enqueue(element) {
    return this.dataStore.push(element)
}

function dequeue() {
    return this.dataStore.shift()
}

function front() {
    return this.dataStore[0]
}

function back() {
    return this.dataStore[this.dataStore.length - 1]
}

function toString() {
    var resStr = ''
    for (var i = 0; i < dataStore.length; ++i) {
        resStr += dataStore[i] + "\n";
    }
    return resStr
}

function empty() {
    if (this.dataStore.length === 0) {
        return true;
    }
    else {
        return false;
    }
}
