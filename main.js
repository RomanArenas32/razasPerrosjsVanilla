import { peticionApi } from './config/got';
import './style.css'


document.querySelector('#app').innerHTML = `
  <div>
    <header class="header">
      <img src='./assets/img/Logo.png' alt="logo">
    </header>
    <nav class="navegacion">
      <img src='./assets/img/icons8-perro-80.png' alt="">
      <div class="tooltip-cartel">
        <span class="tooltip">Hola :)</span>
        <span class="text">Bienvenido a PetUsers</span>
      </div>
    </nav>
    <div class="botones">
      <button class="obtenerPerro">obtenerPerro</button>   
      <button class="obtenerPerro">obtenerPerro</button>   
      <button class="obtenerPerro">obtenerPerro</button>   
    </div>
    <div class="contenedor"></div>
  </div>
`
const contenedor = document.querySelector(".contenedor");
const obtenerPerro = document.querySelector(".obtenerPerro");


document.addEventListener('DOMContentLoaded', async () => {



  try {
    const datos = await peticionApi("https://dog.ceo/api/breeds/list/all");
    console.log(datos)
    const imagen = datos.data.message;
    contenedor.innerHTML = `
    <h2>PERRO: </h2>
    <img src='${imagen}' alt="">
  `;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
});

