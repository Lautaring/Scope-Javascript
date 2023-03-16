//Variables

var a; //Declaración
var b = 'b'; //Declaración y asignación
b = 'bb' //Reasignación
var a = 'aa'; //Redeclaración


//Global Scope
var fruit = 'Apple'; //Global
console.log(fruit);
function bestFruit(){
    console.log(fruit);
}

bestFruit();


function countries(){
    country = 'Colombia'; //Global
    console.log(country);
}

countries();
console.log(country);