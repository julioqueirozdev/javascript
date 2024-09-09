
import {Pessoa} from './Pessoa.js'

// criar novo objeto a partir da classe, instanciar 

let pessoa1 = new Pessoa('Julio', 29, 76, 1.80)
let pessoa2 = new Pessoa('Ana', 30, 65, 1.60)
let pessoa3 = new Pessoa('Bia', 45, 60, 1.65)
let pessoa4 = new Pessoa('Marco', 19, 70, 1.90)

console.log(Pessoa.totalPessoas)
console.log ('Situação ' + pessoa1.classificaIMC())

console.log("Nome " + pessoa1.nome)
console.log("Idade " + pessoa1.idade)
console.log("IMC " + pessoa1.imc)


// atribuir valores para os atributos de um objeto

// pessoa1._nome = 'Julio'
// pessoa1._idade = 29
// pessoa1._peso = 76
// pessoa1._altura = 1.80

// pessoa2._nome = 'Ana'
// pessoa2._idade = 30
// pessoa2._peso = 65
// pessoa2._altura = 1.60

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)


console.log(pessoa1.calculaImc())