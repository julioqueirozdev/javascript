import { Pessoa } from "../models/Pessoa";

export class PessoaController {

    //atributos, propriedades 

    _inputNome
    _inputIdade
    _inputPeso
    _inputAltura

    //metodos

    //construtor
    constructor (){
        this._inputNome = document.querySelector('#nome')
        this._inputIdade = document.querySelector('#idade')
        this._inputPeso = document.querySelector('#peso')
        this._inputAltura = document.querySelector('#altura')
    }

    //adicionar pessoa
    adiciona(event){

        event.preventDefault() //mantem a mesma página

        //criar uma pessoa
        this._criaPessoa()
        console.log(this._criaPessoa())
    }

    //criar pessoa
    _criaPessoa(){
        return new Pessoa(
            this._inputNome.value,
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value
        )
    }

    //limpar formulário
    _limpaFormulario(){
        this._inputNome.value = ''
        this._inputIdade.value = ''
        this._inputPeso.value = ''
        this._inputAltura.value = ''

        this._inputNome.focus()
    }

    // preencheFormulario(nome, idade, peso, altura) {
    //     this._inputNome.value   = nome
    //     this._inputIdade.value  = idade
    //     this._inputPeso.value   = peso
    //     this._inputAltura.value = altura
    // }

}