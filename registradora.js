const prompt =require("prompt-sync")();

let precio;
let total=0;
do{
    precio=Number(prompt("INGRESAR EL PRECIO(O EL 0 PARA TERMINAR):"));
    if (isNaN(precio)){
        console.log ("ingrese un numero");
        continue;
    }

    if (precio !==0){
        total=total+precio;
    }
}while (precio !==0);
console.log("el total es:"+total);