const miArreglo = [10, 20, 30, 40, 50];
const btn = document.getElementById('btn')
btn.addEventListener('click', mostrar)

function mostrar(){
  const indiceAleatorio = Math.floor(Math.random() * miArreglo.length);
  const numeroAleatorio = miArreglo[indiceAleatorio];
  console.log(`Número aleatorio: ${numeroAleatorio}`);
}



const API_KEY = `cc3525b0265333f281346d1b21e06474`;
/*
function getBibleVersions() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
  
      xhr.addEventListener(`readystatechange`, function () {
        if (this.readyState === this.DONE) {
          const { data } = JSON.parse(this.responseText);
          const versions = data.map((data) => {
            return {
              name: data.name,
              id: data.id,
              abbreviation: data.abbreviation,
              description: data.description,
              language: data.language.name,
            };
          });
  
          resolve(versions);
          console.log(versions)
        }
      });
  
      xhr.open(`GET`, `https://api.scripture.api.bible/v1/bibles`);
      xhr.setRequestHeader(`api-key`, API_KEY);
  
      xhr.onerror = () => reject(xhr.statusText);
  
      xhr.send();
    });
  }
  getBibleVersions()
*/
// URL de la API
const apiUrl = 'https://api.scripture.api.bible/v1/bibles';

// Configuración de la solicitud
const requestOptions = {
  method: 'GET',
  headers: {
    'api-key':'cc3525b0265333f281346d1b21e06474', 
  },
};

// Realiza la solicitud
fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
    // Maneja los datos recibidos aquí
    console.log(data);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });





