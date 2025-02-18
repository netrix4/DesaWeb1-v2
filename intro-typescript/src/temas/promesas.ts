// console.log("Inicio");

// new Promise((resolve, reject) => {
//   // console.log("Cuerpo de la promsea");

//   setTimeout(() => {
//     // resolve("Se cumplio la promesa");
//     reject("No se cumplio la promesa");
//   }, 1000);
// })
//   .then((mensaje) => console.log(mensaje))
//   .catch((errorMensaje) => console.log(errorMensaje))
//   .finally(() => console.log("Finalizo la promesa"));

// console.log("Fin");

// placas AKY-55-81

import { Hero } from "../data/heroes";
import { getHeroId } from "./imp-ext";

const obtenerHeroesIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroResults = getHeroId(id);
      if (heroResults) {
        resolve(heroResults);
      } else {
        reject("Heroe no encontrado");
      }
    }, 1500);
  });
};

obtenerHeroesIdAsync(50)
  .then((hero) => console.log(`El nombre es: ${hero.nombre}`))
  .catch((error) => console.log(error));
