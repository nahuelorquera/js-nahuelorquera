let primerTitulo = document.getElementById("title")
primerTitulo.classList.add("titleClass")


let boton = document.getElementById("button");
boton.onclick = () => {
let ele1 = document.getElementById("Productos");
let valor1 = parseInt(ele1.options[ele1.selectedIndex].value);
let ele2 = document.getElementById("cuotas");
let valor2 = parseInt(ele2.options[ele2.selectedIndex].value);
let operacion = `Usted debe pagar ${valor2} cuota/s de ${valor1 / valor2}`;
document.getElementById("resultado").value = operacion;

}

