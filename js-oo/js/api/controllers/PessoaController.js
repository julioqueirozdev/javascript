import { Pessoa } from "../models/Pessoa.js"
import { ListaPessoas } from "../models/ListaPessoas.js"
import { PessoaView } from "../views/PessoaView.js"
import { Mensagem } from "../models/Mensagem.js"
import { MensagemView } from "../views/MensagemView.js"
import { PessoasRepository } from "../repositories/PessoasRepository.js"

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


         ///////
        //repositorio
        this._pessoasRepository = new PessoasRepository()
        console.log(this._pessoasRepository)
        let lista = this._pessoasRepository.ler()
        console.log(lista)
        ////////////////


        //criar lista de pessoas
        this._listaPessoas = new ListaPessoas(lista)

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
        //adicionar nova pessoa na lista e atualizar a tela
        const pessoaAdd = this._criaPessoa()
        this._listaPessoas.adiciona(pessoaAdd)
        // this._pessoasView.update(this._listaPessoas)

        //adicionar repositorio

        this._pessoasRepository.criar(pessoaAdd)
        this._pessoasView.update(this._listaPessoas)

        //definir e atualizar a mensagem
        this._mensagem.texto = 'Pessoa cadaastrada com sucesso!'
        this._mensagemView.update(this._mensagem)
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