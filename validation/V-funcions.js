const valid = document.querySelector('#valid');
const Nam = document.getElementById('nom');
const ape = document.getElementById('apellido');
const sus = document.getElementById('sus');
const pass = document.getElementById('pass');
// const texto1 = document.getElementById('text1');
// const texto2 = document.getElementById('text2');
// const texto3 = document.getElementById('text3');
// const dib = document.getElementById('app2');
// const showD = document.querySelector('.showder');
// let vir = true;

// las variable mas impoortante pues de esta se validara si si o si no se muestra el contenido  

let validacion;
let validacion2;
let validacion3;
let validacion4;

// para validar que usuario ingreso los datos 
valid.addEventListener('click',()=>{
 if(Nam.value.length == 0){
    console.log('false/');
    validacion=false;
 }else{
    console.log('true');
    validacion=true;
}
});
valid.addEventListener('click',()=>{
 if(ape.value.length == 0){
    console.log('false/');
    validacion2=false;
 }else{
    console.log('true');
    validacion2=true;
 }
});
valid.addEventListener('click',()=>{
 if(sus.value == 10001){
    console.log('true');
    validacion3=true;
 }else{
    console.log('false/');
    validacion3=false;
 }
});
valid.addEventListener('click',()=>{
 if(pass.value.length < 5){
    console.log('false/_');
    validacion4=false;
 }else{
    console.log('true/_')
    validacion4=true;
 }
});
//

//aqui se muestran los mensajes al usuario para que llene los campos
    valid.addEventListener('click',()=>{
    if(Nam.value.length == 0){
        document.getElementById("text0").innerHTML = `<h4>por lo menos pon tu nombre</h4>`;
    }else{
        document.getElementById("text0").innerHTML = `<h4>.</h4>`;
    }
});
    valid.addEventListener('click', ()=>{
        if(ape.value.length == 0){
            document.getElementById("text1").innerHTML = `<h4>eeeeeeeeee?</h4>`;
        } 
        else{
            document.getElementById("text1").innerHTML = `<h4>.</h4>`;
        }
});
    valid.addEventListener('click', ()=>{
        if(sus.value == 10001){
        document.getElementById("text2").innerHTML = `<h4>.</h4>`;
    }else{
        document.getElementById("text2").innerHTML = `<h4>me parece que no eres usuario;)</h4>`;    
    };
});
    valid.addEventListener('click',()=>{
    if(pass.value.length < 6){
       document.getElementById('text3').innerHTML = `<h4>um um<h4>`;
    }else{
        document.getElementById('text3').innerHTML = `<h4>.<h4>`; 
    }
});

valid.addEventListener('click', function(){
    if(validacion==true ){
        console.log('1hecho');
        if(validacion2==true){
            console.log('2hecho');
            if(validacion3==true){
                console.log('3hecho');
                if(validacion4 == true){
                    console.log('4hecho');
                    if(ape.value != 3 ){
                        validdd();
                        console.log('si lo es');
                       }else{
                        validdd();
                        console.log('no lo es');
                    } 
                }else{
                    console.log('4Error');
                    alert('weeeeeeeeee');
                }
            }else{
                console.log('3Error');
                alert('weeeeeee');
            }
        }else{
            console.log('2Error');
            alert('weeee');
        }
    }else{
        console.log('1Error')
        alert('cumple con los estatutos we');
    }
});

function validdd(){
 window.location.href ="https://upyy-unprogramayyo.netlify.app/";
}