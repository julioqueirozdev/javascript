
function reajuste(){
    let nome = window.prompt('Qual é o nome do funcionário?')
    console.log(nome)
    let salario = window.prompt(`Qual é o salário de ${nome}?`)
    console.log(salario)
    let reajuste = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    console.log(reajuste)
    let r = Number(salario * reajuste / 100)
    console.log(r)
    let novosal = Number(salario) + r
    console.log(novosal)
    let res = window.document.getElementById('res')
    res.innerHTML = `<h1> ${nome} recebeu um aumento salarial! </h1>`
    res.innerHTML += `<p>O salário atual era R$ ${salario}.</p>` 
    res.innerHTML += `<p>Com um aumento de ${reajuste}%, o salário vai aumentar R$ ${r} no próximo mês.</p>`
    res.innerHTML += `E a partir daí, ${nome} vai passar a ganhar R$ ${novosal}.`  
}