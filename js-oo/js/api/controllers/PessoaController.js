import { Pessoa } from "../models/Pessoa.js"
import { ListaPessoas } from "../models/ListaPessoas.js"
import { PessoaView } from "../views/PessoaView.js"
import { Mensagem } from "../models/Mensagem.js"
import { MensagemView } from "../views/MensagemView.js"

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

        //criar lista de pessoas
        this._listaPessoas = new ListaPessoas()

        //view
        this._pessoasView = new PessoaView(document.querySelector('#dados'))
        this._pessoasView.update(this._listaPessoas)

        //mensagem
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView(document.querySelector('#mensagem'))
        this._mensagemView.update(this._mensagem)
    }

    //adicionar pessoa
    adiciona(event){

        event.preventDefault() //mantem a mesma página

        //criar uma pessoa
        // this._criaPessoa()
        // console.log(this._criaPessoa())

        //adicionar nova pessoa na lista
        this._listaPessoas.adiciona(this._criaPessoa())
        console.log(this._listaPessoas.pessoas)

        //definir e atualizar a mensagem
        this._mensagem.texto = 'Pessoa cadaastrada com sucesso!'
        this._mensagemView.update(this._mensagem)

        //atualização de tela
        this._pessoasView.update(this._listaPessoas)


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