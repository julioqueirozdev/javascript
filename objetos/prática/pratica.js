var meuCarro = new Object();
meuCarro.fabricacao = 'Ford';
meuCarro.modelo = 'Mustang';
meuCarro.ano = 1969;
meuCarro.semPropriedade; //propriedade nula
meuCarro['cor'] = 'Azul';


//nome de propriedade 

var meuObj = new Object(),
str = 'minhaString',
aleat = Math.random(),
obj =  new Object();

meuObj.tipo = 'Sintaxe de ponto';
meuObj['data de criação'] = 'String com espaco';
meuObj[str] = 'valor de String';
meuObj[aleat] = 'Numero Aleatorio'
meuObj[obj] = 'Objeto';
meuObj['']='mesmo uma string vazia';

// acessar propriedade usando um valor de string em uma variável

var nomeDaPropiredade = 'fabricação';
meuCarro[nomeDaPropiredade] =  'Ford';

nomeDaPropiredade = 'modelo';
meuCarro[nomeDaPropiredade] = 'Mustang';

console.log(meuCarro)
console.log(meuObj)
console.log(nomeDaPropiredade)

//iterar por todas as propriedades de um objeto

function mostrarProps(meuCarro){
    let propriedades = [];
    for(var propriedade in meuCarro){
        if (meuCarro.hasOwnProperty(propriedade)){
            propriedades.push(`${propriedade}: ${meuCarro[propriedade]}`);
        }   
    }
    return propriedades;
}

const resultado = mostrarProps(meuCarro);
console.log(resultado);

// criar novos objetos 

var winx = {
    bloom: 'fada da chama do dragão',
    flora: 'fada da natureza',
    aisha: 'fada das ondas',
    tecna: 'fada da tecnologia',
    musa: 'fada da musica',
    stella: 'fada do sol'
}

function mostrarProps(winx){
    let propriedades = [];
    for(var propriedade in winx){
        if (winx.hasOwnProperty(propriedade)){
            propriedades.push(`${propriedade}: ${winx[propriedade]}`);
        }   
    }
    return propriedades;
}

const fadas = mostrarProps(winx);
console.log(fadas);

// objeto com propriedade que também é um objeto 

var minhaHonda = {
    cor: 'vermelho',
    rodas: 4,
    motor: {cilindros: 4 , tamanho: 2.2},
}

console.log(minhaHonda)


// função construtora

function Carro(marca, modelo, ano, dono){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;
    this.mostreCarro = mostreCarro;

}

var meucarro =  new Carro('Eagle, Talon TSi', 1993);

console.log(meucarro)

// objetos podem ter propriedades que por si só também são objetos

function Pessoa(nome, idade, sexo){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

var jose = new Pessoa('Jose Silva', 33, 'M')
var paulo = new Pessoa('Paulo Santos', 39, 'M');

var carro1 = new Carro('Eagle', 'Talon TSi', 1993, jose)

carro1.cor = 'preto'; 

console.log(carro1)

//parei em usadno o método object.create

// encapsulamento das propriedades e métodos de Animal 
var Animal = {
    tipo: 'Invertebrados',
    classe: 'cordata',
    qualTipo: function(){
        console.log(this.tipo);
    },
};
// cria um novo tipo de animal chamado animal1
var animal1 = Object.create(Animal);
animal1.qualTipo();
console.log(animal1.tipo)
console.log(animal1.classe)

//cria um novo tipo de animal chamado peixes
 var peixe = Object.create(Animal);
 peixe.tipo = 'Peixes';
 peixe.qualTipo(); // chama a função qualTipo que da um console.log
 console.log(peixe.tipo)


//herança 

//propriedade para um tipo de objeto 
//  Animal.prototype.cor = null;

// métodos são funções associadas a um objeto

function mostreCarro(){
    var resultado = `Um belo ${this.marca} ${this.modelo} ${this.ano}`;
    console.log(resultado)
}

carro1.mostreCarro()

///this pode ser usado dentro de um método para referenciar o objeto corrente
//validade valida avalores da propriedade de um objeto

function validade(obj, lowval, hival){
    if(obj.value < lowval || obj.value > hival){
        alert('Valor Inválido!')
    }
}

//this referencia um objeto chamando um método


// getter e setter 
// getter = obtem valor de uma propriedade esppecifica
//setter = define o valor de uma propriedade especifica

var o = {
    a: 7, // um numero
    get b(){
        return this.a + 1; // getter que retorna o.a +1
    },
    set c(x){
        this.a = x / 2 //setter que define o valor de o.a pela metade do valor definido para o.c
    },

};

console.log(o.a);
console.log(o.b);
o.c = 50;
console.log(o.a);

// remover uma propriedade não herdada

var myobj = new Object()
myobj.a = 15;
myobj.b = 12;

//removendo a propriedade a
delete myobj.a;
console.log('a' in myobj) //false

// podemos usar delete para deletar uma variavel global não definida com var
g = 17;
delete g;


//comparando variáveis 
// var fruit  = {name: 'apple'};
// var fruitbear = {name: 'apple'};
// console.log(fruit==fruitbear) //false
// console.log(fruit===fruitbear) // false

var fruit  = {name: 'apple'};
var fruitbear = fruit
console.log(fruit==fruitbear)//true
console.log(fruit===fruitbear)//true

