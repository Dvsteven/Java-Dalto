//TODO. -Explicacion etiquetas-
//TODO. "//?" Tiutlos
//TODO. "//**" Contenido
//TODO. "//" Comentario normal, relleno
//TODO. "//---" Delimitacion 

//----------------------------------------------------------------
//?Arrays
//**Formas de crear un array
//SIEMPRE USAR LET AL INICALIZAR UNA VARIABLE "let var"

// let arrays = ["lucas","24","Buenos aires"];
// let frutas = ["Banana","Pepino","Pera"];
// document.write(frutas[2])
//----------------------------------------------------------------
//?Arrays Asociativos
//**Breve definicion
//Similar al formato JSON. Intercambio de información.

//**Sintaxis y uso

// let pc1 = {
//     nombre: "Notebook Dvsteven",
//     procesador: "Intel Celeron",
//     ram: "4GB",
//     espacio: "500GB"
// };

// pc2 = ["Notebook Dvsteven", "Intel Celeron", "4GB", "500GB"]

// let nombre = pc1["nombre"];
// let procesador = pc1["procesador"];
// let ram = pc1 ["ram"];
// let espacio = pc1 ["espacio"];

// frase = `El nombre de mi pc es: <b>${nombre}</b><br>
//         El procesador es: <b>${procesador}</b><br>
//         La cantidad de ram es: <b>${ram}</b><br>
//         Y tiene un esapcio de: <b>${espacio}</b><br>`;

//     document.write(frase);
//----------------------------------------------------------------

//?Bucles e Iteracion
//----------------------------------------------------------------
//**Breve definicion
//Ciclo de consulta y respuesta
//Primero consulta despues ejecuta
//**While
//Ejemplo re basico
// let numero = 0;
// while (numero < 6) {
//     numero++;
//     document.write(numero  + "<br>")
// }
//----------------------------------------------------------------

//**do while
//Primero ejecuta despues consulta
// let numero = 0;
// do {
//     document.write(numero  + "<br>")
//     numero++;
// }
// while (numero < 6)

//uso de break
// let numero = 0;
// while (numero < 6) {
//     numero++;
//     document.write(numero  + "<br>");
//     if (numero == 3) {
//         break;
//     }
// }

//----------------------------------------------------------------

//**for
//Composicion: variable - condicion - iteracion (aumento o decremento)
// for (let i = 0; i <= 6; i++){
//     document.write(i + "<br>")
// }

//----------------------------------------------------------------

//**continue
// for (let i = 0; i <= 6; i++){
//     if (i == 3){
//         continue;
//     }
//     document.write(i + "<br>")

// }

//----------------------------------------------------------------


// //**for in
// let list = ["gato","perro","pez","lombriz"]
// for (animal in list){
//     document.write(animal + "<br>") //Muestra los indices (posicion)
// }
// document.write("<br>")
// //si primero hago referencia a la lista luego a la variable que almacena el indice, aparece el nombre de esa posicion
// //lo cual seria equivalente a esto: list[0] 
// for (animal in list){
//     document.write(list[animal] + "<br>")
// }

// document.write("<br>")
//**for of
// for (animal of list){
//     document.write(animal + "<br>")//Muestra el contenido de la lista
// }



//**-------------------------------------------------------------
//**break
//**label


// array1 = ["maria","Josefa","roberta"];
// array2 = ["rogelio","roger",array1,"pedrou"];

// forRancio:
// for (let array in array2){
//     if (array == 2){
//         for (let array of array1){
//             if (array == "maria"){
//                 continue forRancio; //se satla esta iteracion y regresa al "label: forRancio"
//             }
//             document.write(array + "<br>");
//         }
//     }else {
//         document.write(array2[array] + "<br>");
//     }
// }

//**-------------------------------------------------------------
//**Funciones

//Se puede almacenar tambien como variable

// function saludar(){
//     respuesta = prompt("Hola, que bueno es saludar y ser saludado: ");
//     if (respuesta == "hola"){
//         alert("Muchas gracias")
//     }else{
//         alert("Que bueno es saludar Y SER SALUDADO")
//     }
// }

// saludar()
 //**---------------------------------------------------------
//  function sumar(num1,num2){
//     let res = num1 + num2; //si no le pongo let, el scope hace que sea una variable usable en cualquier parte del codigo y no solo dentro de la funcion
//     return res;
//  }

// let resultado = sumar(13, 31)
// //siempre que se le pasan distintos PARAMETROS realiza distintas operaciones
// // sumar(12, 12)
// // sumar(89, 45)

//formas de crear las funciones:

// function saludar(){
//     document.write("Hola!");
// }

// const saludar = function(parametro){
//     let frase = `Hey ${parametro}`;
//     document.write(frase);
// }

// const saludar = (parametro)=>{
//     let frase = `Hey ${parametro}`;
//     document.write(frase);
// }

// saludar("Hola!") //se ñe pasa este parametro solo a los dos ultimos ejemplos ↑