// Verificando tipo de variaveis

let valor = "Hello";
console.log(typeof valor); // string

valor = 10;
console.log(typeof valor); // number

valor = parseFloat(10.12);
console.log(typeof valor); // float number

valor = valor != 0; // true
// console.log(valor ! = 0 ? "ok" : "nok"); // ok
console.log(typeof valor); // boolean

valor = BigInt("97236548234265720347234082735828978979778304989");
console.log(typeof valor); // BigInt

let varUndefined;
console.log(typeof varUndefined); // undefined null value

class Objeto {
    constructor (paramOne, paramTwo) {
        this.paraOne = paramOne;
        this.paraTwo = paramTwo;
        console.log(typeof this.paramTwo); // undefined
    }
}

const objeto = new Objeto("Só parâmetro 1");
console.log(typeof objeto); // object class

valor = document.getElementById("elementoInexistente"); //valor = null;
console.log(typeof valor); // undefined null

valor = ["vetor 1", "vetor 2"];
console.log(typeof valor); // array object

const date = new Date ();
console.log(typeof date); // date boject

console.log(date); // mostrar tudo sobre a variavel/objeto