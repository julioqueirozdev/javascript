
function converter(){
    var temp = window.prompt('Digite uma temperatura em °C (Celsius)')
    console.log(temp)
    var k = (Number(temp)+273.15)
    console.log(k)
    var f = (Number((temp)*1.8)+32)
    console.log(f)
    var res = window.document.getElementById('res')
    res.innerHTML = `<p> A Temperatura de ${temp}°C, corresponde a... </p>`
    res.innerHTML += `<p> ${k}°K (Kelvin) </p>`
    res.innerHTML += `<p> ${f}°F (Fahrenheit) </p>`
}