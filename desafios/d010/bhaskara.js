
function calcular(){
    let a = window.prompt('Qual o valor de a?')
    console.log(a)
    let b = window.prompt('Qual o valor de b?')
    console.log(b)
    let c = window.prompt('Qual é o valor de c?')
    console.log(c)
    let delta = (b*b) - (4*a*c)
    console.log(delta)
    let res = window.document.getElementById('res')
    res.innerHTML = '<h2><strong>Resolvendo Bhaskara<strong></h2>'
    res.innerHTML += `<p>A equação atual é <strong> ${b}x² + ${a}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo que será realizado será <strong>&Delta; = ${b}²- 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi  <strong>&Delta; = ${delta}</strong></p>`
}