let nam = document.getElementById('nav--user');
let nam2 = document.getElementById('nav--use');
let tes = document.getElementById('ext');
let ses = document.getElementById('btn5');

const edad = document.getElementById('edad');



// nam = prompt ("¿Cómo te llamas?", "");

ses.addEventListener('click', function(){
    nam.innerText =`_ ${tes.value}_`;
    nam2.innerText =`_ ${tes.value}_`;
});

// ( function (){
// }) ();

function play1(){
    const url = 'https://upyy-unprogramayyo-calculator.netlify.app';
    window.location.href = url;
}

function play2(){
    const url = 'https://upyy-unprogramayyo-chat.netlify.app ';
    window.location.href = url;
}

function play3(){
    const url = "https://upyy-unprogramayyo-tictactoe.netlify.app"
    window.location.href = url;
}
function play4(){
    const url = "https://upyy-unprogramayyo-contador.netlify.app"
    window.location.href = url;
}
function play5(){ 
    const url = "https://upyy-unprogramayyo-eventos.netlify.app"
    window.location.href = url ;
}
function play6(){
    const url = "https://upyy-unprogramayyo-teclado.netlify.app";
    window.location.href = url;
}
function play7(){
 
    const url = "https://upyy-unprogramayyo-jsontocsv.netlify.app"
    window.location.href =url;
}
function play8(){
    const url = "https://upyy-unprogramayyo-comment.netlify.app ";
    window.location.href = url;
}
function play9(){
    const url = "https://upyy-unprogramayyo-carrito.netlify.app";
    window.location.href = url;
}
function play10(){
    const url = "https://upyy-unprogramayyo-exquiva.netlify.app"
    window.location.href = url;
}
function play11(){
    const url = "https://upyy-unprogramayyo-memoria.netlify.app"
    window.location.href = url;
}
function play12(){
    const url = "https://upyy-unprogramayyo-appdetarea.netlify.app"
    window.location.href = url;
}
 

 
//
//
/*
 function peticion1(){
    const http = new XMLHttpRequest();
    const url = 'http://127.0.0.1:5500/htm/otro/index.html';
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

        document.getElementById('uno').innerHTML = this.responseText;  
        }
    }
    http.open("GET", url, true);
    http.send();
}

document.getElementById("gett1").addEventListener('click', function(){
    peticion1();
});
*/
