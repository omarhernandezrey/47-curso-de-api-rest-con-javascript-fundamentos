// Imprimimos un mensaje en la consola para confirmar que el programa está corriendo correctamente.
console.log("hello world");

// Declaramos una constante llamada 'URL' que contiene la dirección de la API.
// Esta API devuelve imágenes aleatorias de perros.
const URL = "https://api.thedogapi.com/v1/images/search";

// Llamamos a la función 'fetch' para realizar una solicitud HTTP a la API.
// 'fetch' devuelve una promesa que se resolverá cuando la respuesta esté disponible.
fetch(URL)
  // Cuando la solicitud se resuelve, obtenemos una respuesta (objeto 'Response').
  .then(res => res.json()) // Convertimos el cuerpo de la respuesta en un objeto JavaScript usando 'json()'.
  
  // Cuando el JSON se ha convertido, pasamos los datos al siguiente bloque '.then'.
  .then(data => {
    // Seleccionamos la primera etiqueta <img> del documento usando 'querySelector'.
    const img = document.querySelector("img");

    // Asignamos la URL de la imagen recibida desde la API al atributo 'src' de la etiqueta <img>.
    // 'data[0].url' contiene la URL de la imagen que queremos mostrar.
    img.src = data[0].url;
  });
