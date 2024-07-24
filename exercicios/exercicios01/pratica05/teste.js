var num = []

function adicionar(n) {
    if(n>100 || n<1){
        console.log('Invalido')    
    } else {
        return num.push(n)  
    }
}

adicionar(10)

console.log(num)
