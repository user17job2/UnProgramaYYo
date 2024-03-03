  // Obtener la lista de tareas desde el localStorage
  const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
  // const descricionesGuardadas = JSON.parse(localStorage.getItem('descriciones')) || [];
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
          li.setAttribute("name", "tareas")
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
// Cambio de colores
const Color =  document.getElementById('btnClasses');
 let estado = true; 
 Color.addEventListener('click', ()=>{
if(estado=== true){
    //nav
    document.querySelector('nav').style.backgroundColor='rgb(25, 25, 50)';
    document.querySelector('nav').style.border='1px solid white';
    document.querySelector('nav').style.transition='1s';
    //body
    document.querySelector('body').style.backgroundColor='rgb(25, 25, 50)';
    document.querySelector('body').style.transition='1s';
    // inputs
    document.querySelector('input').style.backgroundColor='rgb(25, 25, 68)'
    document.querySelector('input').style.transition='1s'
    //
    document.querySelector('#nuevaTarea').style.backgroundColor='rgb(25, 25, 68)';
    document.querySelector('#nuevaTarea').style.transition='1s'
    //sus botones 
    document.querySelector('.btn-addTitle').style.backgroundColor='rgb(25, 25, 68';
    document.querySelector('.btn-addTitle').style.transition='1s';
    //
    document.querySelector('.btnbtn').style.backgroundColor='rgb(25, 25, 68';
    document.querySelector('.btnbtn').style.transition='1s';
    //seccion contenedora
    document.querySelector('section').style.backgroundColor='rgb(25, 35, 70)';
    document.querySelector('section').style.border='1px solid white';

    document.querySelector('section').style.transition='1s';
    //tareas
    // document.getElementsByName('tarea').style.backgroundColor='red';
    // console.log(tareasGuardadas)
    const elementosMenu = document.getElementsByClassName('tArea');
    for (let i = 0; i < elementosMenu.length; i++) {
    elementosMenu[i].style.backgroundColor = 'transparent';
    elementosMenu[i].style.transition = '1s';
    }
    estado=false;
}else{
    document.querySelector('nav').style.transition='1s';
    document.querySelector('nav').style.border='none';
    document.querySelector('nav').style.backgroundColor='transparent';
    
    document.querySelector('body').style.backgroundColor='rgb(12, 99, 125)';
    document.querySelector('body').style.transition='1s';

    document.querySelector('input').style.backgroundColor='rgb(15, 100, 125)'
    document.querySelector('input').style.transition='1s'

    document.querySelector('#nuevaTarea').style.backgroundColor='rgb(15, 100, 125)';
    document.querySelector('#nuevaTarea').style.transition='1s'

    document.querySelector('.btn-addTitle').style.backgroundColor='rgb(12, 99, 125)';
    document.querySelector('.btn-addTitle').style.transition='1s';

    document.querySelector('.btnbtn').style.backgroundColor='rgb(12, 99, 125)';
    document.querySelector('.btnbtn').style.transition='1s';

    document.querySelector('section').style.backgroundColor=' rgb(27, 79, 101)';
    document.querySelector('section').style.transition='1s';

    const elementosMenu = document.getElementsByClassName('tArea');
    for (let i = 0; i < elementosMenu.length; i++) {
    elementosMenu[i].style.backgroundColor ='antiquewhite';
    elementosMenu[i].style.transition ='1s';  
    }
    estado=true
  }

});


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

