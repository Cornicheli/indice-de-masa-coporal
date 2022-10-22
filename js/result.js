let argentino = document.getElementById(`peso-argentino`)
let monedas = document.getElementById(`crash`)
let estadosUnidos = document.getElementById(`dolar`)

argentino.addEventListener('input', e => conversionPesos(e.target.value))

estadosUnidos.addEventListener('input', e => {
    if (e.target.value > 0){
        let resultado = conversionDolar (e.target.value)
        monedas.innerHTML = `
    <label>
        Peso Argentino
        <input id="peso-argentino" value='${resultado}' type="text" name="Realizadas" placeholder="here">
    </label>
    
    <label>
        Dolar Estadounidense
        <input id="dolar" type="text" value='${e.target.value}' name="Realizadas" placeholder="here">
    </label>
        `
    }
})

function conversionPesos(moneda){

    let total = moneda / 140.58

    return total
}

function conversionDolar(moneda){
    
    let total = moneda * 140.58

    return total
}
























// function calculadoraDePesoCorporal(argentino, estadosUnidos){
//     let resultado  =argentino * estadosUnidos
//     return resultado
// }

// enviar.addEventListener(`click`, e =>{
// let TotalCorporal
// altura = altura.value
// peso = peso.value
// TotalCorporal = calculadoraDePesoCorporal(altura, peso)
// enviar.innerHTML = TotalCorporal
// })