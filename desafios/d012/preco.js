
function verificar(){
    let valor = window.prompt('Qual era o preço anterior do produto?')
    let v = Number(valor)
    v = v.toFixed(2) 
    let nvalor = window.prompt('Qual é o preço atual do produto?')
    let nv = Number(nvalor)
    nv = nv.toFixed(2)
    let res = window.document.getElementById('res')
    let aumento =  (nv - v).toFixed(2)
    console.log(aumento)
    let va = (((nv-v)/v)*100).toFixed(2)
    console.log(va)
    res.innerHTML = `<h2>Analisando os valores informados</h2>`
    res.innerHTML += `<p>O produto custava R$ ${v.replace('.',',')} e agora custa R$ ${nv.replace('.',',')}</p>`

    if(aumento>0){
      res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
      res.innerHTML += `<p>O preço subiu R$ ${aumento} em relação ao preço anterior.</p>`
      res.innerHTML += `<p>Uma variação de ${va}% para cima.</p>`

    } else {
        aumento = aumento*(-1)
        va = va*(-1)
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço baixou R$ ${aumento.toFixed(2)} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${va}% para baixo.</p>`   
    }
}