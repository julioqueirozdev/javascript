
function verificar(){
    var ano = window.prompt('Qual é o ano que você quer verificar?')
    var i = Number(ano)
    var res = window.document.getElementById('res')
    if(( i % 4 == 0)&&( i % 100 != 0)||(i % 400 == 0)){
        res.innerHTML = `<h2>Analisando o ano de ${ano}</h2>`
        res.innerHTML += `<p>O ano de ${ano} <span style= 'background-color: green; color: white;'>É BISSEXTO</span> ✅</p>`
    } else {
        res.innerHTML = `<h2>Analisando o ano de ${ano}</h2>`
        res.innerHTML += `<p>O ano de ${ano} <span style= 'background-color: red; color: white;'>NÃO É BISSEXTO</span> ❌</p>`
    }
}