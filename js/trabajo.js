let producto1 = {
    nombre: "TV",
    monto: 30000,
}

let producto2 = {
    nombre: "Heladera",
    monto: 70000,
}

let producto3 = {
    nombre: "Aire acondicionado",
    monto: 22000,
}

let producto4 = {
    nombre: "Plancha",
    monto: 7000,
}

let producto5 = {
    nombre: "Microondas",
    monto: 12000,
}

function nuevoProducto(nombre,monto){
    this.nombre = nombre;
    this.monto = monto;
}

let nuevoProducto1 = new nuevoProducto ("Calefactor",17000);
let nuevoProducto2 = new nuevoProducto ("Teclado Gamer",8000); 
let nuevoProducto3 = new nuevoProducto ("PC",120000);  



const productos = [producto1,producto2,producto3,producto4,producto5];
const nuevosProductos = [nuevoProducto1,nuevoProducto2,nuevoProducto3];
const catalogo = productos.concat(nuevosProductos);

let productoSeleccionado = parseInt(prompt("¿Que producto desea comprar?\n0_TV\n1_Aire acondicionado\n2_Plancha\n3_Microondas\n4_Calefactor\n5_Teclado Gamer\n6_PC"));

let cuotas = parseInt(prompt("¿En cuantas cuotas desea pagarlo?"));

calcularCuotas(catalogo[productoSeleccionado].monto, cuotas);

function calcularCuotas(monto, cuotas) {
    let total = monto / cuotas;
    if (cuotas == 1){
        return alert ("Usted debe pagar " + total + " en una sola cuota");
    } else if (cuotas == 2 ) {
        return alert("Usted debe pagar 2 cuotas de " + (total*1.21));
        
    } else if (cuotas == 6) {
        return alert("Usted debe pagar 6 cuotas de " + (total*1.21));
    } else if (cuotas == 12) {
        return alert("Usted debe pagar 12 cuotas de " + (total*1.21));
    }
}



let productoSeleccionado2 = parseInt(prompt("¿Que otro producto desea comprar?\n0_TV\n1_Aire acondicionado\n2_Plancha\n3_Microondas\n4_Calefactor\n5_Teclado Gamer\n6_PC"));

let cuotas2 = parseInt(prompt("¿En cuantas cuotas desea pagarlo?"));

calcularCuotas(catalogo[productoSeleccionado2].monto, cuotas2);

function calcularCuotas(monto, cuotas2) {
    let total = monto / cuotas2;
    if (cuotas2 == 1){
        return alert ("Usted debe pagar " + total + " en una sola cuota");
    } else if (cuotas2 == 2 ) {
        return alert("Usted debe pagar 2 cuotas de " + (total*1.21));
        
    } else if (cuotas2 == 6) {
        return alert("Usted debe pagar 6 cuotas de " + (total*1.21));
    } else if (cuotas2 == 12) {
        return alert("Usted debe pagar 12 cuotas de " + (total*1.21));
    }
}
