function go() {
    //变量作用域为函数内部，外部无法访问
   var name = "Sear"
    return {
       getName:function () {
           return name
       },
       setName: function (value) {
           return name  = value
       }
    }
}
var newGo = new go()
console.log(newGo.getName())