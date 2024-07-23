function soma(n1 = 0, n2 = 0){
    som = n1 + n2
    if (som%2==0){
        return "Par"
    } else {
        return "Impar"
    }
}

console.log(soma(1,2))