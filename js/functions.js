let usuarioR = prompt("Elija su nombre de usuario");
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
} 