
function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
   
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0){
        window.alert('Erro, faltam dados!')
        res.innerHTML= "Impossivel contar!"
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo Invalido! Considerando passo 1.')
            p = 1
        }
        if (i<f){
            //contagem crescente
            for (var c = i; c<=f; c = c + p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        } else if (i>f) {
            //contagem regressiva
            for (let c = i; c>= f; c-=p){
                 res.innerHTML += ` ${c} \u{1F449}`
            }
        }
     res.innerHTML += "\u{1F3F4}"    
    }
}
