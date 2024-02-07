// import {nombr} from "./recepciones/V-recepcion2.js";
//  let misdatos = nombr;
//  console.log(misdatos);

const body = document.querySelector('body');
const contentn = document.querySelector('.content');
 let nam = localStorage.getItem("neim");
 let age = localStorage.getItem("eigh");
 let subs = localStorage.getItem("suss");
 let passw = localStorage.getItem("pass");

 let usuario={
    nome: `${nam}`,
    eedad:`${age}`,
    susss:`${subs}`,
    passs:`${passw}`
 }
 console.log(usuario.eedad, usuario.nome);
//  console.log(JSON.stringify( usuario,));

// console.log(usuario.eedad)

if(usuario.eedad >= 18){
     body.style.backgroundImage='linear-gradient( 75deg,  rgba(185, 18, 0, 100) 0%, rgba(0, 0, 255, 100) 99%)';
     contentn.style.backgroundImage='linear-gradient( 75deg,  rgba(185, 18, 0, 100) 0%, rgba(0, 0, 255, 100) 99%)';
   }else{
     body.style.backgroundImage='linear-gradient( 75deg,  rgba(18, 185, 0, 100) 0%, rgba(0, 0, 255, 100) 99%)';
     contentn.style.backgroundImage='linear-gradient( 75deg,  rgba(18, 185, 0, 100) 0%, rgba(0, 0, 255, 100) 99%)';

  }

// let misdatos2 = JSON.parse(misdatos)
// console.log(misdatos2)
