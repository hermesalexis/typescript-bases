// El fetch api me permite hacer peticiones a endpoints externos a mi aplicación
// El fetch retorna una promesa
// Las promesas se pueden trabajar en cadena, la promesa actual recibe la respuesta de la anterior


// **Intefaces**
//1. Crear interfaces para objetos
//2. Crear los tipos para datos atomicos, ejemplo una propiedad de un objeto

import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = 'giphyApiKey';

// El fetch en este caso hace una petición al endpoint
// luego recibe una promesa y le convierte la respuesta en json
// luego se obtiene el nodo body y se define como GIFResponse que es una interfaz que facilita conocer de que se compone la respuesta
// ya con body se accede a los diferentes nodos de la respuesta
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
  .then( resp => resp.json())
  .then( (body: GIFResponse) => {
    console.log(body.data.images.downsized_medium.url);
  })
  .catch( err => console.info( err ));