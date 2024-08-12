
function converter(){
    var dist = window.prompt('Digite uma distância em metros (m)')
    console.log(dist)
    var km = (Number(dist)*0.001)
    console.log(km)
    var hm = (Number(dist)*0.01)
    console.log(hm)
    var dam = (Number(dist)*0.1)
    var dm = (Number(dist)*10)
    var cm = (Number(dist)*100)
    var mm = (Number(dist)*1000)
    var res = window.document.getElementById('res')
    res.innerHTML = `<p> A distância de ${dist} metros, corresponde a... </p>`
    res.innerHTML += `<p> ${km} quilômetros (Km) </p>`
    res.innerHTML += `<p> ${hm} hectômetros (Hm) </p>`
    res.innerHTML += `<p> ${dam} decâmetros (Dam) </p>`
    res.innerHTML += `<p> ${dm} decímetros (dm) </p>`
    res.innerHTML += `<p> ${cm} centímetros (cm) </p>`
    res.innerHTML += `<p> ${mm} milímetros (mm) </p>`
}