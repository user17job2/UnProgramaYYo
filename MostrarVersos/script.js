const btn = document.getElementById('btn')
let nom;
let num; 
let numV; 

// un arreglo de 66 posiciones
const LB = ['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1_Samuel','2_Samuel','1_Kings','2_Kings','1_Chronicles','2_Chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Song_of_Songs','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts','Romans','1_Corinthians','2_Corinthians','Galatians','Ephesians','Philippians','Colossians','1_Thessalonians','2_Thessalonians','1_Timothy','2_Timothy','Titus','Philemon','Hebrews','James','1_Peter','2_Peter','1_John','2_John','3_Jhon','Jude','Revelation'];
// un arreglo de 30 posiciones
const LBC = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
const LBCV = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]


btn.addEventListener('click', elegirLibro)
btn.addEventListener('click', elegirCapitulo)
btn.addEventListener('click', elegirVersiculo)

// FUNCION para elegir libro
function elegirLibro(){
  function selectRandomWord() {
    // Selecciona una palabra al azar
    const randomIndex = Math.floor(Math.random() * LB.length);
    const randomWord = LB[randomIndex];
    return randomWord;
}
const selectedWord = selectRandomWord();
nom = selectedWord;
console.log(nom) //variable importante va como parametro en la url 
}
// la funcion para elegir el capitulo
function elegirCapitulo(){
  function selectRandomNumber() {
    // Selecciona una palabra al azar
    const randomIndexN = Math.floor(Math.random() * LBC.length);
    const randomNum = LBC[randomIndexN];
    return randomNum;
  }
  const selectedNum = selectRandomNumber();
  num = selectedNum; //variable importante va como parametro en la url 
  console.log('Capitulo', num)
}
// la funcion para elegir el versiculo
function elegirVersiculo(){
  function selectRandomNumberV() {
    // Selecciona una palabra al azar
    const randomIndexNV = Math.floor(Math.random() * LBCV.length);
    const randomNum = LBCV[randomIndexNV];
    return randomNum;
  }
  const selectedNumV = selectRandomNumberV();
  numV = selectedNumV; //variable importante va como parametro en la url 
  console.log('posicion', numV)  

  verificar();
}
// verifica si ya hay: libro, capitulo y versiculo.
function verificar(){
  if(nom != undefined){
    if(num != undefined){
      if(numV != undefined){
        renderizarAPI()
      }
    }
  }else{
    console.log('err')
  }
}
verificar()

async function obtenerAPI() {
  try {
    const response = await fetch(`https://bible.helloao.org/api/BSB/${nom}/${num}.json`);
    const datoss = await response.json();
    return datoss;
  } catch (error) {
     console.error(error);
    elegirCapitulo()
    elegirVersiculo()
  }
}

// Luego puede llamar a la función para obtener los datos
// y en esta misma funcion se desata todo lo demas 
async function renderizarAPI() {
  const datoss = await obtenerAPI();
  if(datoss){
    console.log('hello')
    let datos002 =datoss.chapter
    // console.log(datos002,'trea')
     verificarCapitulo()

   }
  let datos001 =datoss.chapter.content[numV]
   let datos002 =datoss.chapter
// console.log(datos002,'trea')

function verificarCapitulo(datos002, number) {
  for (var number in datos002) {
    if (datos002.hasOwnProperty(number) && datos002[number] === num) {
      console.log('capitulo',datos002[number])
      verificaSiHay()
      return true;
    }
  }
  // console.log('MOMENTO-C')
  elegirCapitulo();
  return false;
}

let verso;
function verificaSiHay(objeto) {
  for (var atributo in objeto) {
    if (objeto.hasOwnProperty(atributo) && typeof objeto[atributo] === 'number') {
      // console.log("versiculo",objeto[atributo])  // el versiculo
      verso=objeto[atributo]
      mostrar()
      return true;
    }
  }
  console.log('MOMENTO-V')
  elegirVersiculo()
  return false;
}
console.log(verificaSiHay(datos001)); 

function mostrar(){
  const datos = document.getElementById('dato')
  const titulo = document.getElementById('libro') 
  // titulo.textContent=nom;
  let datos09 = datoss.chapter.content[numV].content[0].text
  const texto = document.getElementById('par') 
  // console.log(datos09)



  if(datos09 == undefined){
    console.log('THERE IS NOTHING')
    const text2 = datoss.chapter.content[numV].content[0]
    // console.log(text2)
    const numm =datoss.chapter.number
    datos.innerHTML=`<h6>Chapter ${numm}</h6> <h6>Verse ${verso}</h6>`
    texto.innerHTML= `<p>${text2}_</p>`
  }else{
    const numm =datoss.chapter.number
    titulo.textContent=nom;
    datos.innerHTML=`<h6>Chapter ${numm}</h6><h6>Verse ${verso}</h6>`
    texto.innerHTML= `<p>${datos09}-</p>`
  }


}
}
