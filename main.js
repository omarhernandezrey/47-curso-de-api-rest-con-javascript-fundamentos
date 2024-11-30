// URL de la API con un límite de 3 imágenes y una API Key válida
const API_URL_RAMDOM = "https://api.thedogapi.com/v1/images/search?limit=2&api_key=live_Uy3Pqxp9u5fLwZM7KhvVlaV7GGvyul8QKQze9fU4Q1qym2AD4b1wonrzK17h1Nuk";
const API_URL_FAVORITES = "https://api.thedogapi.com/v1/favourites?limit=2&api_key=live_Uy3Pqxp9u5fLwZM7KhvVlaV7GGvyul8QKQze9fU4Q1qym2AD4b1wonrzK17h1Nuk";

const spanError = document.getElementById("error")


async function loadRamdomDogs() {
  const res = await fetch(API_URL_RAMDOM);
  const data = await res.json();
  console.log('Random'); 
  console.log(data); 


  if(res.status !==200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  }else {
    const img1 = document.getElementById("dogImg1");
    const img2 = document.getElementById("dogImg2");
  
    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}


async function loadFavoritesDogs() {
  
    const res = await fetch(API_URL_FAVORITES);

    const data = await res.json();
    console.log('Favoritos');
    
    console.log(data); 
    if(res.status !==200) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message ;
      }
  
  }


loadRamdomDogs();
loadFavoritesDogs();