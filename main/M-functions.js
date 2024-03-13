alert("actually in process :)"); 


let nam = document.getElementById('nav--user');
let tes = document.getElementById('ext');
let ses = document.getElementById('btn5');


// obtener el nombre y subirlo al local storage 
ses.addEventListener('click', function(){
    let dato =  tes.value
    const estado = localStorage.setItem("user51525", dato)

    mostrarTitulo();
});
//traerlo del localstorage y mostrarlos
function mostrarTitulo(){
    alert('sugunda funcion')
    const nombre= localStorage.getItem('user51525')
     nam.innerText =`_${nombre}_`;    
}


