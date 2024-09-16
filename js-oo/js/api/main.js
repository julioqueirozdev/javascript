import { PessoaController } from './controllers/PessoaController.js'

let pessoaController = new PessoaController()

//controlar envio do formulário e exibição da tela

let formulario = document.querySelector('#formulario')

//escutador de evento no formulario

formulario.addEventListener('submit',(event) => {

    //adicionar pessoa
    pessoaController.adiciona(event)

    //limpar formulario
    pessoaController._limpaFormulario()

})

// formulario apagar

const formApagarEditar = document.querySelector('#formApagarEditar')
const btnApagar = document.querySelector('#btnApagar')
const btnEditar = document.querySelector('#btnEditar')

formApagarEditar.addEventListener('submit', (event) => {
    event.preventDefault()
})

btnApagar.addEventListener('click', () => {
    //console.log('Apagar')

    let id = document.querySelector('#id').value
    console.log('Apagar registro ' + id)

    document.querySelector('#id').value = null

    //Interações com a janela modal 
    //abrir janela modal

    openModal(`Deseja apagar o registro ${id}?`)

    //se clicar no botão sim
    document.querySelector('#sim').addEventListener('click', () => {
        pessoaController.apaga(id)
        //id = null //apaga o id 
        closeModal()
    })

})

btnEditar.addEventListener('click', () => {
    console.log('Editar')

    //rolar pagina para cima 
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    document.querySelector('#nome').focus()
    let id = document.querySelector('#id').value
    console.log('Editar registro ' + id)

    document.querySelector('#idPessoa').value = id
    document.querySelector('#id').value = null

    let pessoa = pessoaController.buscaPorId(id)
    console.log(pessoa)

    if(pessoa){
        let { _nome, _idade, _peso, _altura } = pessoa
        //preencher formulario com dados
        pessoaController.preencheFormulario(_nome, _idade, _peso, _altura)    
    }

})

//controles da janela modal
function openModal(mensagem){
    document.querySelector('#modal').classList.add('active')
    document.querySelector('#mensagemModal').innerHetml = 
    `
    <h2>${mensagem}</h2>
    `
}

function closeModal(){
    document.querySelector('#modal').classList.remove('active')
}

// Evento para fechar janela modal

document.querySelector('#modalClose').addEventListener('click', closeModal)

//botão nao
document.querySelector('#nao').addEventListener('click', closeModal)
// Controles da janela modal //
