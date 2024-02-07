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
 
