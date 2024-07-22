var num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)

num[5] = 6

console.log(`Nosso vetor é o ${num}`)

num[6] = 2
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[3])
console.log(`O primeiro valor do vetor é ${num[0]}`)
c = 0
while (c<=num.length){
    console.log(num[c])
}

