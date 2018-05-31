
// es6 Object.assign()


var father = {
    eye:"big",
    hair: "black",
}
father.travelPlace = ['北京','上海','香港'];

var son = Object.assign({},father)

son.travelPlace.push("广东")
console.log(son)
console.log(father)