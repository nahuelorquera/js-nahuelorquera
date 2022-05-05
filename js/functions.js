/* let usuarioR = prompt("Elija su nombre de usuario");
let contraseniaR = prompt("Elija su contraseña");

let usuarioI = prompt("Ingrese su usuario");
let contraseniaI = prompt("Ingrese su contraseña");




while (contraseniaR != contraseniaI){
    console.log("Contraseña incorrecta");
    let contraseniaI = prompt("Ingrese nuevamente su contraseña");
    if(contraseniaR == contraseniaI){
        alert("Bienvenido");
        break;
    }
}  */


function calcularCuotas(monto,cuotas){
    let unaCuota = monto;
    let dosCuotas = (monto / 2) + 100;
    let seisCuotas = (monto / 6) + 200;
    let doceCuotas = (monto / 12) + 400;
     ;
    if(cuotas == "1"){
        return console.log ("Usted debe pagar " + monto + " en una sola cuota")
    }
    else if (cuotas == "2"){
        return console.log("Usted debe pagar 2 cuotas de " + dosCuotas )
    }else if(cuotas == "6"){
        return console.log("Usted debe pagar 6 cuotas de " + seisCuotas )
    }else if(cuotas == "12"){
        return console.log("Usted debe pagar 12 cuotas de " + doceCuotas )
    }
}


calcularCuotas(12000,6)

