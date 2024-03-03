
  // Obtener la lista de tareas desde el localStorage
  const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
  const descricionesGuardadas = JSON.parse(localStorage.getItem('descriciones')) || [];

  const btn = document.querySelector('.btnbtn');
  btn.addEventListener('click', agregarTarea);
  // btn.addEventListener('click', agregarDescripcion);

  // Mostrar las tareas en la lista
function mostrarTareas() {
      const listaTareas = document.getElementById('listaTareas');
      listaTareas.innerHTML = '';
      tareasGuardadas.forEach((tarea, index) => {
          const li = document.createElement('div');
          li.innerHTML = `<h3 class=h33>${tarea}</h3>`
//                  por site llega a dificultar aqui va un textContent
          li.classList.add('tArea');
          
         li.addEventListener('dblclick', () => eliminarTarea(index));
          listaTareas.appendChild(li);
      });
}

  // Agregar una nueva tarea
function agregarTarea(){
      const nuevaTarea = document.getElementById('nuevaTarea').value;
      if (nuevaTarea.trim() !== '') {
        tareasGuardadas.push(nuevaTarea);
        localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
        mostrarTareas();
        document.getElementById('nuevaTarea').value = '';
      }
}

  // Eliminar una tarea
  function eliminarTarea(index) {
      tareasGuardadas.splice(index, 1);
      localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
      mostrarTareas();
  }
  // Mostrar las tareas al cargar la página
  mostrarTareas();
// ////////
//ahora aqui tratare de desarrollar los comentarios 

let textArea = document.getElementById("listaTareas");

// como me refiro al elemento que toque en una funcion
// como utilizar el click y el dblclick en un solo elemento
//  como verifico con un 'if' si un elemento existe en el dom
 //la condiicional para que no cree descriciones infinitas  
//  ahora debo hacer que las descripciones de las tareas se guarden junto con que los div que contienen las tareas se hagan de un tamano fijo

const inputT = document.querySelector('.inputT');  
const addTitle = document.querySelector('.btn-addTitle');

valueishon();

addTitle.addEventListener('click', valueishon);
function valueishon(){
ver();      
     function ver(){
     let valui = inputT.value;
     if(inputT.value != ""){
          const NOMBRE = localStorage.setItem("appDeTareas00000001", valui);
          mostrar();
     }else{
          // let Name = "Notes..";
          //  inputT.defaultValue='notas de..';
          let Name = localStorage.getItem("appDeTareas00000001");
          // console.log(Name);
          inputT.defaultValue = `${Name}`;
     }
}

function mostrar(){
     let Name = localStorage.getItem("appDeTareas00000001");
     // console.log(Name);
     inputT.defaultValue = `${Name}`;

}
//   console.log(valui);
//   inputT.textContent=`${minemensaje}`
}

// // Division
//   const descripcionesGuardadas=JSON.parse(localStorage.getItem('descripciones')) || [];
//   const btnt = document.getElementsByClassName("tArea");



let textaT = document.querySelectorAll('.textaT');

// textaT.addEventListener("blur", () => {
//   // Aquí puedes realizar acciones cuando el textarea obtiene el foco
//   console.log("El textarea ha recibido el foco.");
//   mostrarTareas();
// });


//  zona de codigo reusable
/*
    const elementos = document.getElementsByClassName("tArea");
      for (const elemento of elementos) {
        alert('hola')
        elemento.addEventListener("click", (index) => {
           // Aquí puedes agregar el código que deseas ejecutar
      
          let pregunta = prompt("quieres Borrar este div o agregar una nueva Descripcion? D=nueva O B=borrar");
      // let archivo= null;
      
      let archivo = document.createElement('textarea');
           // Realiza otras acciones según tu necesidad
           archivo.setAttribute("cols", '30');
           archivo.setAttribute("rows", '30');
           archivo.setAttribute("placeholder", 'Descriptcion');
           archivo.setAttribute("class", 'textaT');
           archivo.setAttribute("value", '32');
           if(pregunta === 'D' ){
              elemento.appendChild(archivo);

           }
           if(pregunta === 'B'){
               eliminarTarea(index);
    
           }
          
         });
        } 
*/

