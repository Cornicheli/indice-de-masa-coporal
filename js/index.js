let altura = document.getElementById(`altura`)
let peso = document.getElementById(`peso`)
let total = document.getElementById(`total`)
let enviar = document.getElementById(`enviar`)

function calculadoraDePesoCorporal(altura, peso){
    let resultado = peso/(altura * altura)
    return resultado
}

enviar.addEventListener(`click`, e =>{
let TotalCorporal
altura = altura.value
peso = peso.value
TotalCorporal = calculadoraDePesoCorporal(altura, peso)
enviar.innerHTML = TotalCorporal
})