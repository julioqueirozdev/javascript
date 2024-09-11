export class ListaPessoas {
    
    //criamos um atributo chamado pessoas que é um array
    constructor (){
        this._pessoas = []
    }

    //método para adicionar pessoa no array
    adiciona (pessoa) {
        this._pessoas.push(pessoa)
    }

    //programação defensiva retornar uma cópia do array
    //usando o concat, passando o nosso array como parâmetro
    get pessoas() {
        //return this._pessoas
        return [].concat(this._pessoas)
    }
}
