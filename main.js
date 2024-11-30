console.log("hello world");

// URL de la API con un límite de 3 imágenes y una API Key válida
const API_URL = "https://api.thedogapi.com/v1/images/search?limit=3&api_key=live_Uy3Pqxp9u5fLwZM7KhvVlaV7GGvyul8QKQze9fU4Q1qym2AD4b1wonrzK17h1Nuk";

// Función asíncrona para recargar las imágenes de perros
async function reload() {
  // Realizamos una solicitud a la API y esperamos la respuesta
  const res = await fetch(API_URL);
  // Convertimos la respuesta en un objeto JSON
  const data = await res.json();

  console.log(data); // Mostramos los datos obtenidos en consola para depuración

  // Seleccionamos los elementos <img> del documento
  const img1 = document.getElementById("dogImg1");
  const img2 = document.getElementById("dogImg2");
  const img3 = document.getElementById("dogImg3");

  // Asignamos las URLs de las imágenes obtenidas a los elementos <img>
  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;
}

// Llamamos a la función para cargar las imágenes al inicio
reload();
