

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manhac.png'
        document.body.style.background = "#8b9e92"
    } else if (hora >=12 && hora < 18 ) {
        img.src = 'tardec.png'
        document.body.style.background = "#f8ddce"
    } else {
        img.src = 'noitec.png'
        document.body.style.background = '#1a142a'
    }
}
