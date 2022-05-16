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
let nuevoProducto2 = new nuevoProducto ("Teclado Gamer ",8000); 
let nuevoProducto3 = new nuevoProducto ("PC",120000);  



const productos = [producto1,producto2,producto3,producto4,producto5];
const nuevosProductos = [nuevoProducto1,nuevoProducto2,nuevoProducto3];
const catalogo = productos.concat(nuevosProductos);


console.table(catalogo)
console.log(catalogo.includes(producto3))

//  let monto = parseInt(prompt("Ingrese monto especificado en la tabla dependiendo el producto elegido"));
/* const cuotas = [1 , 2 , 6 , 12]


 function calcularCuotas(monto,cuotas){
    let unaCuota = (monto / (cuotas[0]));
    let dosCuotas = (monto / (cuotas[1])) *1.21;
    let seisCuotas = (monto / (cuotas[2])) *1.21;
    let doceCuotas = (monto / (cuotas[3])) *1.21;
     ;
    if(cuotas == "1"){
        return alert("Usted debe pagar " + monto + " en una sola cuota")
    }
    else if (cuotas == "2"){
        return console.log("Usted debe pagar 2 cuotas de " + dosCuotas )
    }else if(cuotas == "6"){
        return alert("Usted debe pagar 6 cuotas de " + seisCuotas )
    }else if(cuotas == "12"){
        return alert("Usted debe pagar 12 cuotas de " + doceCuotas )
    }
    
}

calcularCuotas(Productos[0],2)
 */

