var num = [5, 8, 2, 9, 3] // vetor
console.log(`Nosso vetor é o ${num}`) // exibição do vetor
num[5] = 6 // adicionar valores ao vetor na posição 5
console.log(`Nosso vetor é o ${num}`) 
num[6] = 2 // adicionar valor ao vetor na possição 6
num.push(1) // adicionar valor ao vetor na ultima posição 
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


/*
c = 0
while (c<=num.length){
    console.log(num[c])
    c++
}*/

/*for (var c = 0; c<num.length; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}*/

// Exibir o vetor de forma mais elaborada com repetições

for(var c in num){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}

let pos = num.indexOf(7)
if (pos == -1 ){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor 6 está na posição ${pos}`)
}




