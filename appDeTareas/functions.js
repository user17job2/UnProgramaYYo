const button = document.querySelector('.button');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const inputT = document.querySelector('.inputT');
const listContainer = document.querySelector('.list-container');


 
form.addEventListener('submit', handleSubmit);
        
menssage();
valueishon();

button.addEventListener('click', valueishon);

function valueishon(){
ver();      
     function ver(){
     let valui= inputT.value;
     if(inputT.value != ""){
          const NOMBRE = localStorage.setItem("appDeTareas00000001", valui);
          mostrar();
     }else{
          // let Name = "Notes..";
          //  inputT.defaultValue='notas de..';
          let Name = localStorage.getItem("appDeTareas00000001");
          console.log(Name);
          inputT.defaultValue = `${Name}`;
     }
}


function mostrar(){
     let Name = localStorage.getItem("nime");
     console.log(Name);
     inputT.defaultValue = `${Name}`;

}
  // console.log(valui);
  // inputT.textContent=`${minemensaje}`
}
function menssage(){
        const h3 = document.createElement('h3');
        h3.classList.add('task-menssage');

         h3.textContent = listContainer.firstElementChild?
         'Tareas por hacer' : 'No hay tareas aun';
         //  listContainer.parentElement.insertBefore(h3, listContainer); manera obsoleta
         
    const prevMessage = document.querySelector('.task-menssage');
    
    if(prevMessage){  
      prevMessage.replaceWith(h3);
       return;
    }
    listContainer.before(h3);
    
}   
function handleSubmit(e){
     e.preventDefault();
    const inputV = input.value;
     createTask(inputV);
     this.reset();
     menssage();


//enviar losdatos del input al localStorage
          const tarea = localStorage.setItem("1-", inputV);
  
}   
function createTask(value){ 
            const newTask = document.createElement("li");
            newTask.textContent = value
            newTask.classList.add('nueva-clase');
            listContainer.prepend(newTask);
            addEvents(newTask);
}     
function addEvents(element){
            element.addEventListener('dblclick', function(){
            //    element.parentElement.removeChild(element) obsoleto
            element.remove(element);
            menssage();
            });
}
const wrap = document.querySelector('.wrapper');
// para clonar un elemento en el DOM
 const copiawrap = wrap.cloneNode(true);
// console.log(copiawrap);
// wrap.after(copiawrap);
// wrap.before(copiawrap);
// el codigo copiado se inserta en el dom 