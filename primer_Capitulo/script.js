montoSujeto1 = prompt("¿Cuanto dinero tienes?");
montoSujeto2 = prompt("¿Cuanto dinero tienes?");
montoSujeto3 = prompt("¿Cuanto dinero tienes?");

montoSujeto1 = parseInt(montoSujeto1); //Convertir a entero
montoSujeto2 = parseInt(montoSujeto2);
montoSujeto3 = parseInt(montoSujeto3);

if (montoSujeto1 >= 0.6 && montoSujeto1 < 1) {
    alert("Sujeto 1, Compre el palito de agua");
    alert("Y te sobran " + (montoSujeto1 - 0.6));
}
else if (montoSujeto1 >= 1 && montoSujeto1 < 1.6) {
    alert("Sujeto 1, Compre el palito de crema");
    alert("Y te sobran " + (montoSujeto1 - 1));
}
else if (montoSujeto1 >= 1.6 && montoSujeto1 < 1.7){
    alert("Sujeto 1, Compre el heladix");
    alert("Y te sobran " + (montoSujeto1 - 1.6));
}
else if (montoSujeto1 >= 1.7 && montoSujeto1 < 1.8){
    alert("Sujeto 1, Compre el heladovich");
    alert("Y te sobran " + (montoSujeto1 - 1.7));
}
else if (montoSujeto1 >= 1.8 && montoSujeto1 < 2.9){
    alert("Sujeto 1, Compre el helardo");
    alert("Y te sobran " + (montoSujeto1 - 1.8));
}
else if (montoSujeto1 >= 2.9 ){
    alert("Sujeto 1, Compre el helado con confites o el pote de 1/4");
    alert("Y te sobran " + (montoSujeto1 - 2.6));
} else {
    alert("Lo siento no te alcanza pa nada chamo");
}

//-----------------------------------------------------------------------

if (montoSujeto2 >= 0.6 && montoSujeto2 < 1) {
    alert("Sujeto 2, Compre el palito de agua");
    alert("Y te sobran " + (montoSujeto2 - 0.6));
}
else if (montoSujeto2 >= 1 && montoSujeto2 < 1.6) {
    alert("Sujeto 2, Compre el palito de crema");
    alert("Y te sobran " + (montoSujeto2 - 1));
}
else if (montoSujeto2 >= 1.6 && montoSujeto2 < 1.7){
    alert("Sujeto 2, Compre el heladix");
    alert("Y te sobran " + (montoSujeto2 - 1.6));
}
else if (montoSujeto2 >= 1.7 && montoSujeto2 < 1.8){
    alert("Sujeto 2, Compre el heladovich");
    alert("Y te sobran " + (montoSujeto2 - 1.7));
}
else if (montoSujeto2 >= 1.8 && montoSujeto2 < 2.9){
    alert("Sujeto 2, Compre el helardo");
    alert("Y te sobran " + (montoSujeto2 - 1.8));
}

else if (montoSujeto2 >= 2.9 ){
    alert("Sujeto 2, Compre el helado con confites o el pote de 1/4");
    alert("Y te sobran " + (montoSujeto2 - 2.6));
} else {
    alert("Lo siento no te alcanza pa nada chamo");
}

//-----------------------------------------------------------------------

if (montoSujeto3 >= 0.6 && montoSujeto3 < 1) {
    alert("Sujeto 3, Compre el palito de agua");
    alert("Y te sobran " + (montoSujeto3 - 0.6));
}
else if (montoSujeto3 >= 1 && montoSujeto3 < 1.6) {
    alert("Sujeto 3, Compre el palito de crema");
    alert("Y te sobran " + (montoSujeto3 - 0.6));
}
else if (montoSujeto3 >= 1.6 && montoSujeto3 < 1.7){
    alert("Sujeto 3, Compre el heladix");
    alert("Y te sobran " + (montoSujeto3 - 0.6));
}
else if (montoSujeto3 >= 1.7 && montoSujeto3 < 1.8){
    alert("Sujeto 3, Compre el heladovich");
    alert("Y te sobran " + (montoSujeto3 - 0.6));
}
else if (montoSujeto3 >= 1.8 && montoSujeto3 < 2.9){
    alert("Sujeto 3, Compre el helardo");
    alert("Y te sobran " + (montoSujeto3 - 1.8));
}
else if (montoSujeto3 >= 2.9 ){
    alert("Sujeto 3, Compre el helado con confites o el pote de 1/4");
    alert("Y te sobran " + (montoSujeto3 - 2.6));
} else {
    alert("Lo siento no te alcanza pa nada chamo");
}

//Segunda version:

/*
"use strict";

const definirCompra = (n) =>{
    let din = prompt(`Dinero de ${n}`);
    if (din >= 0.6 && din < 1) return (`${n}: helado de agua`);
    if (din >= 1 && din < 1.6) return (`${n}: helado de crema`);
    if (din >= 1.6 && din < 1.7) return (`${n}: helado de heladix`);
    if (din >= 1.7 && din < 1.8) return (`${n}: helado de heladovich`);
    if (din >= 1.8 && din < 2.9) return (`${n}: helado de helardo`);
    if (din >= 2.9) return (`${n}: helado de confites o pote de 1/4kg`);
    else return (`${n}: No te alcanza para ningun helado pobre de mierda`);
}

console.log(definirCompra("Cofla"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Roberto"));

*/