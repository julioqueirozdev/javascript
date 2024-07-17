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
        var img = document.createElement('img')
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            genero = "Homem"
            if (idade>=0 && idade < 10){
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21){
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'homemadulto.png')
            }else {
                img.setAttribute('src', 'homemidoso.png')
            }

        } else if (fsex[1].checked){
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
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)    
    }
    
}