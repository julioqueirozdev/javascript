
function nota() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = window.prompt(`Qual é a primeira nota de ${nome}?`)
    let n2 = window.prompt(`Qual é a segunda nota de ${nome}?`)
    let media = Number((Number(n1)+Number(n2))/2)
    console.log(media)
    // let m = media.replace('.', ',')
    let res = window.document.getElementById('res')

    if(media<3){
        res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
        res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a mpedia é ${media}</p>`
        res.innerHTML += `<p>Com a média abaixo de 3,0, o aluno está <spam style= 'background-color: red'>REPROVADO</spam></p>`
    } else if((media>=3) && (media <= 6)){
        res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
        res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a mpedia é ${media}</p>`
        res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <spam style= 'color: yellow'>RECUPERAÇÂO</spam></p>`
    } else {
        res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
        res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a média é ${media}</p>`
        res.innerHTML += `<p>Com a média acima de 6,0, o aluno está <spam style= 'background-color: green'>APROVADO</spam></p>`
    }
}