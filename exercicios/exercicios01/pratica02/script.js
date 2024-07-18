function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img') // deste modo, criamos um elemento de img através do js sem precisar criá-lo no HTML5
        img.setAttribute("id", "foto") // aqui damos um id = "foto" para o nosso elemento img
        if (fsex[0].checked){ // como temos dois elementos input:radio que precisam ter o mesmo nome "radsex", quando a opção escolhida é [1] homem, a condicional coordena o codigo para esse caminho
            genero = "Homem"
            if (idade>=0 && idade < 10){
                img.setAttribute('src', 'menino.png') // definimos a imagem que o elemento img receberá desta forma com ('src', "nome da imagem")
            } else if (idade < 21){
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'homemadulto.png')
            }else {
                img.setAttribute('src', 'homemidoso.png')
            }

        } else if (fsex[1].checked){ // se fsex = [1], ou seja, se a opção escolhida for "Mulher", a condicional guia o código por esse caminho
            genero = "Mulher"
            if (idade>=0 && idade < 10){
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21){
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50 ){
                img.setAttribute('src', 'mulheraddulta.png')
            }else {
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center' // definimos uma configuração de estilo para o texto exibido na div
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // definimos a alteração no html da div#res
        res.appendChild(img) // definimos quer a imagem será incluida dentro da div como uma child     
    }
    
}