//一个FUNA，FUNB，让B继承A，用原型链怎么B继承A的属性

function A() {
    this.funB = function () {
        console.log('A:funB');
    };
}

A.prototype = {
    funA: function () {
        console.log('A:funA');
    }
};

function B() {
}

function extend(sub, parent) {
    sub.prototype = new parent();

}

extend(B, A);
var b = new B();
b.funA(); // out 'A:funA'
b.funB(); // out 'A:funB'
console.log(b instanceof A); // out "true"