
function converter(){
    var dol = window.prompt('Antes de mais nada. Quanto está a cotação do dolar agora?')
    console.log(dol)
    var carteira = window.prompt('Quantos R$ você tem na carteira?')
    console.log(carteira)
    var comp = Number(carteira/dol)
    console.log(comp)
    var res = window.document.getElementById('res')
    res.innerHTML=`Com R$ ${carteira}, você pode comprar...`
    res.innerHTML += `<p>US$ ${comp} doláres.</p>`
    res.style.fontWeight = 'bolder' 
}