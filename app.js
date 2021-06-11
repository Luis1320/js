



const monto = prompt("Ingresa tu monto");

let products = ["manzana", "pera", "jugo", "jabones"]

console.log(products[2])

let pc = {
nombre: "Luis pc",
ram: "8GB",
grafica: "ninguna",
marca: "acer"

}
let numero = 0
while(numero < 20) {
    numero++
    console.log(numero)

    if(numero == 10) {
        break;
    }
}

let nombre = pc["nombre"]
let ram = pc["ram"]
let grafica = pc["grafica"]
let marca =pc["marca"]

let componentes = `
<p>
El pc es de: ${nombre} <br>
ram del pc: ${ram} <br>
grafica del pc: ${grafica} <br>
marca del pc: ${marca}
</p>

`

document.write(componentes)

console.log(pc["marca"])

let heladoAgua = 0.6

let heladoCrema = 1

let bombonHelado = 1.6

let bombonHeladovich = 1.7

let bombonHeladoHelardo = 1.8

let heladoConfite = 2.9

if(monto >= 0.6 && monto < 1) {
    document.write(`Puedes comprar el helado agua que cuesta ${heladoAgua}`)
}

else if (monto >= heladoCrema && monto < bombonHelado) {
document.write(`puedes comprar el helado de crema que cuesta ${heladoCrema}`)
}

else if(monto >= bombonHelado && monto  < bombonHeladovich) {
    document.write(`puedes comprar el helado Bombon que cuesta ${bombonHelado}`)
}

else if(monto >= bombonHeladovich && monto < bombonHeladoHelardo) {
    document.write(`Puedes comprar el helado vich que cuesta ${bombonHeladovich}`)
}

else if (monto >= bombonHeladoHelardo && monto < heladoConfite)  {
    document.write(`Puedes comprar el bombon helardo que cuesta ${bombonHeladoHelardo}`)
}

else if (monto >= heladoConfite && monto <= 3) {
    document.write(`<p>Puedes comprar el helado confite que cuesta ${heladoConfite}</p>`)
}

else if(monto > heladoConfite) {
    document.write(`tienes dinero suficiente para comprar cualquier helado`)
}

else {
    alert("no tienes dinero suficiente para poder realizar compras")
}
