let monto = parseInt(prompt("Ingrese monto a pagar"));
let cuotas = prompt ("Ingrese en cuantas cuotas (1,2,6,12)");

function calcularCuotas(monto,cuotas){
    let unaCuota = monto;
    let dosCuotas = (monto / 2) + 100;
    let seisCuotas = (monto / 6) + 200;
    let doceCuotas = (monto / 12) + 400;
     ;
    if(cuotas == "1"){
        return alert("Usted debe pagar " + monto + " en una sola cuota")
    }
    else if (cuotas == "2"){
        return alert("Usted debe pagar 2 cuotas de " + dosCuotas )
    }else if(cuotas == "6"){
        return alert("Usted debe pagar 6 cuotas de " + seisCuotas )
    }else if(cuotas == "12"){
        return alert("Usted debe pagar 12 cuotas de " + doceCuotas )
    }
    
}

alert(calcularCuotas(monto,cuotas))


