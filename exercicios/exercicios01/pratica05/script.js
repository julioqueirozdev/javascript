
var num = []
var list = document.getElementById('selnum')
var res = document.getElementById('res')
function adicionar() {
var val = window.document.getElementById('txtn')
if (val.value < 1 || val.value > 100){
        window.alert('Número Inválido')
} else {
     var i = Number(val.value)
        if (num.indexOf(i) != -1){
            window.alert('Numero já adicionado')
        } else {
            var item = document.createElement('option')  
            item.text = `Valor ${i} adicionado`
            item.value = `list`
            list.appendChild(item)
            num.push(i)
            res.innerHTML = ''
            val.value = ''
        }
        
    }
}


function finalizar(){
    if (list.innerHTML == ''){
        window.alert('Nenhum número cadastrado!')
    } else {
        res.innerHTML = ''
        num.sort()
        res.innerHTML += `Ao todo, temos ${num.length} números cadastrados.`
        res.innerHTML += `<br>O maior valor informado foi ${num[num.length]}`
        res.innerHTML += `<br>O menor número informado foi ${num[0]}`
        var soma = 0
        for (var c = 0; c < num.length; c++){ 
        soma = soma + num[c]
        }
        res.innerHTML += `<br>Somando todos os valores temos ${soma}`
        res.innerHTML += `<br>A média dos valores digitados é ${soma/num.length}`    
    }
    
} 
