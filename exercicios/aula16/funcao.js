function parimp(n){ // n é o parâmetro formal que recebe o parâmetro real
    if (n%2==0){
        return "par"
    } else{
        return "impar"
    }
}

var res = parimp(5) // 5 é o parâmetro real 
console.log(res)