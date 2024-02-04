

// const valid = document.querySelector('#valid');

// valid.addEventListener('click', function(){
  
//     console.log(Nam.value, edad.value, sus.value, pass.value, ' _valid_');
// })

 
document.querySelector('#valid').addEventListener('click', e => {
    e.preventDefault();
    obtenerDatos();
    // const Dat = Object.fromEntries(new FormData(e.target))
    // console.log(JSON.stringify(Dat))
    // let dato = document.getElementsByName("texto")[0].value;
    // // Mostrar el valor en una alerta
    // alert(dato);
});


function obtenerDatos(){
    const form = document.querySelector('#app');
    //  console.log(form);
    const deira = [];
     for(let ele of form){
        deira.push(ele.value)
     } 

    //  console.log(deira[0]);
    //  console.log(deira[1]);
    //  console.log(deira[2]);
    //  console.log(deira[3]);

     let nombre = localStorage.setItem("neim",deira[0]);
     let edad = localStorage.setItem("eigh",deira[1]);
     let suscripcion = localStorage.setItem("suss",deira[2]);
     let password = localStorage.setItem("pass",deira[3]);

    //  console.log(nombre,edad, suscripcion, password,'datos del usuarios')

    let name = localStorage.getItem("neim",deira[0]);
    let age = localStorage.getItem("eigh",deira[1]);
    let subs = localStorage.getItem("suss",deira[2]);
    let passw = localStorage.getItem("pass",deira[3]);

    console.log(name,age,subs,passw,'datos del usuarios');

    form.reset();

}
 

 
//  export default function bits(){
// //  let nombre = Nam.value;
// //  let Edad = edad.value;
// //  let suscripcion = sus.value;
// //  let password = pass.value;


// // let usuarios = JSON.stringify(usuario)
// // window.Datus = nombre, Edad, suscripcion, password, 'dios a sido bueno';
// // document.cookie = "Dat0s=" + Datus;


// // const nameE = Nam.value;
// // const Edad = edad.value;
// // const password = pass.value;
// // const suscripcion = sus.value;

// // console.log(nombre, Edad, suscripcion, password, 'dios a sido bueno');
//     //
//     //  console.log(nameE,"hello")
//     // console.log(Edad);
//     // console.log(password);
//     // console.log(suscripcion);   
    
// }
  
/* como importar archivos?
/*Usando  export

// En el archivo donde se guarda la cookie
var nombre = prompt ("¿Cómo te llamas?"); // Obtener el valor del prompt
document.cookie = "nombre=" + nombre; // Guardar el valor en la cookie
export var nombre = document.cookie.split("=")[1]; // Exportar la variable nombre con el valor de la cookie

// En el otro archivo js
import { nombre } from "./archivo.js"; // Importar la variable nombre desde el archivo js
console.log(nombre); // Usar la variable nombre
*/
/*Usando la variable como propiedad global 

// En el archivo donde se guarda la cookie
var nombre = prompt ("¿Cómo te llamas?"); // Obtener el valor del prompt
document.cookie = "nombre=" + nombre; // Guardar el valor en la cookie
window.nombre = document.cookie.split("=")[1]; // Guardar la variable nombre como una propiedad global

// En el otro archivo js
var nombre = window.nombre; // Acceder a la propiedad global nombre
console.log(nombre); // Usar la variable nombre*/



