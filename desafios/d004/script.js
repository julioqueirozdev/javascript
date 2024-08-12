

function comprar(){
   let produto = window.prompt('Que produto você está comprando?')
   console.log(produto)
   let valor = window.prompt('Quanto custa o mouse gamer que você está comprando?')
   console.log(valor)
   let pagamento = window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`)
   console.log(pagamento)
   let val = Number(valor)
   let pag = Number(pagamento)
   window.alert(`Você comprou ${produto} que custou R$ ${valor}. Deu R$ ${pagamento} e vai receber R$ ${pag-val} de troco. Volte Sempre!`)
}