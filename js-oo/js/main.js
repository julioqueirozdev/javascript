
class Pessoa 
{
    // atributos = variáveis ou caracteristicas
    _nome  // tipo string
    _idade  // tipo integer
    _peso // tipo float ou real
    _altura //_ o underline indica que os atributos são privados

    // métodos = funções ou comportamentos 
    
    // método construtor
    constructor (nome, idade, peso, altura){
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura

    }

}

// criar novo objeto a partir da classe, instanciar 

let pessoa1 = new Pessoa('Julio', 29, 76, 1.80)
let pessoa2 = new Pessoa('Ana', 30, 65, 1.60)

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