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
//**for in
//**for of
//**----------
//**break
//**label
//**continue