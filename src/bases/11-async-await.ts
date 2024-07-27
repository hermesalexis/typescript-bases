// Cuando una función es async la transforma retornando una promesa
// el async y el await me permite ejecutar código asíncrono como si fuera sincrono
// el await lo que hace es obtener el valor de la respuesta como si la promesa del async fuera exitosa
// si hay un error la excepción se maneja en un try catch
// No se puede utilizar await si no se encuentra en una función asincrona
import type { GIFResponse } from "../interfaces/gif.response";
import giphyApi from "./10-axios";


export const getImage = async() => {
  try {
    const resp = await giphyApi.get<GIFResponse>('/random');
    return resp.data.data.images.downsized_large.url;
  } catch (error) {
    throw 'Url no encontrado';
  }
}


getImage()
  .then(url => console.log({ url }))
  .catch( error => console.log(error));