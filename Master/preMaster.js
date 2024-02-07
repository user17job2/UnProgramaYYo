const detonar = document.querySelector('#btn-detonador');
const detonar2 = document.querySelector('#btn-detonador2');
const Bcolor1 = document.querySelector('body')
const ColoR = document.querySelector('#ramphys')



detonar.addEventListener('click', http1);//rojo
detonar2.addEventListener('click', http2);//verder
/*
detonar.addEventListener('click', httpC1);
detonar2.addEventListener('click', httpC2);

function httpC1(){
    Bcolor1.style.backgroundImage = 'linear-gradient( 75deg,  rgba(200, 5, 0, 0.639) 0%, rgba(0, 0, 255, 0.63) 99%)';
    Color.style.backgroundImage ='linear-gradient( 75deg,  rgba(200, 205, 200, 0.639) 0%, rgba(0, 0, 255, 0.63) 99%)';
}
function httpC2(){
    Bcolor1.style.backgroundImage= 'linear-gradient( 75deg,  rgba(18, 185, 0, 0.639) 0%, rgba(0, 0, 255, 0.63) 99%)';
    Color.style.backgroundImage= 'linear-gradient( 75deg,  rgba(18, 185, 0, 0.639) 0%, rgba(0, 0, 255, 0.63) 99%)';

}
*/

function http1(){
// window.location.href ="https://upyy-unprogramayyo.netlify.app/";
    const http = new XMLHttpRequest();
    const url = 'http://127.0.0.1:5500/Master/index1.html';
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        document.body.innerHTML = this.responseText;  
        }
    }
    http.open("GET", url, true);
    http.send();   

    // Bcolor1.style.backgroundImage = 'linear-gradient( 75deg,  rgba(200, 5, 0, 0.639) 0%, rgba(0, 0, 255, 0.63) 99%)';
    // Color.style.backgroundImage ='linear-gradient( 75deg,  rgba(200, 205, 200, 0.639) 0%, rgba(0, 0, 255, 0.63) 99%)';
    // title.style.display='hidden'
}
function http2(){
    const http = new XMLHttpRequest();
    const url = 'http://127.0.0.1:5500/Master/index1.html';
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        document.body.innerHTML = this.responseText;  
        }
    }
    http.open("GET", url, true);
    http.send();
    // Bcolor1.style.backgroundImage= 'linear-gradient( 75deg,  rgba(18, 185, 0, 0.639) 0%, rgba(0, 0, 255, 0.63) 99%)';
    // ColoR.style.backgroundImage= 'linear-gradient( 75deg,  rgba(18, 185, 0, 0.639) 0%, rgba(0, 0, 255, 0.63) 99%)';
};

/*
    let nam = document.getElementById('nav--user');
    let nam2 = document.getElementById('nav--use');
    let tes = document.getElementById('ext');
    let ses = document.getElementById('btn5');
    
    
    // nam = prompt ("¿Cómo te llamas?", "");
    ses.addEventListener('click', function(){
        nam.innerText =`_ ${tes.value}_`;
        nam2.innerText =`_ ${tes.value}_`;
    });
    
  //  ( function (){
 //}) ();
    
    function play(){
        let url = 'https://upyy-unprogramayyo-calculator.netlify.app';
        window.location.href = url;
    };
    
    function play2(){
         const url = 'https://upyy-unprogramayyo-chat.netlify.app';
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
    

*/