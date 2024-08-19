
function converter(){
    var des = window.prompt('Qual é o produto que você está comprando?')
    console.log(des)
    if(des != String || des === null) {
        window.alert('Por favor, diga o nome do produto!')
    } else {
          var preco = window.prompt(`Qual é o preço do ${des}`)
            console.log(preco)
            var valdes = Number(preco) * 0.1
            console.log(valdes)
            var res = window.document.getElementById('res')
            res.innerHTML = `<p>Calculando desconto de 10% para ${des}</p>`
            res.innerHTML += `<p>O preço original era de R$ ${preco}.</p>`
            res.innerHTML += `<p>Você acaba de ganhar R$ ${valdes} de desconto (-10%).</p>`
            res.innerHTML += `<p>No fim, você vai pagar R$ ${Number(preco)-Number(valdes)} no produto ${des}.</p>`  
        }
}