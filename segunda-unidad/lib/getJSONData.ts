/**
 * @module JSON/Fetcher
 * @author Mario Arias netrix4@gmail>
 */

import { SmaeResponse, Categoría } from "../interfaces/SMAEResponse";
import { initializeApp } from "firebase/app";
import { getDatabase, get, ref } from "firebase/database";

const firebaseConfig = {
  //apiHeaderInfo
};

/**
 * Gets all the data from SMAE json file locallly using asyncronous fetch and looks for all the results searched by the provided keyword.
 * @function
 * @param {string} keyWord A literal of a word included in the name of the food (Alike <alike> in SQL)
 * @returns {object[]} A list of objects thst the matched results
 */
export const getJsonDataByKeyWord = async (keyWord: string) => {
  console.log("Obtener alimentos por palabra clave");
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const dbRef = ref(db, "/");

  return await get(dbRef)
    .then((snapshot) =>
      snapshot.exists() ? snapshot.val() : console.log("Error, FireBase error")
    )
    .then((alimentos: SmaeResponse[]) =>
      Object.values(alimentos).filter((item) => item.Alimento.includes(keyWord))
    )
    .catch((e) => {
      console.log(e);
    });
};

/**
 * Gets all the data from SMAE json file locallly using asyncronous fetch and searched by a provided categorie name
 * @param {string} categorie Literal of a categorie to look for
 * @returns {Object[]} A list of resulting objects {Alimento: 'NameOfFood'}
 */
export const getJsonDataByCategorie = async (categorie: string) => {
  console.log("Obtener alimentos por categoria");
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const dbRef = ref(db, "/");

  return await get(dbRef)
    .then((snapshot) =>
      snapshot.exists() ? snapshot.val() : console.log("Error, FireBase error")
    )
    .then((alimentos: SmaeResponse[]) =>
      Object.values(alimentos).filter((item) => item.Categoría == categorie)
    );
};

/**
 * Gets all the data from SMAE json file locallly using asyncronous fetch. No params needed.
 * @returns {object[]} A list of all objects within the JSON file
 */
export const getJsonData = async () => {
  console.log("Obtener alimentos y regresarlos en JSONs");
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const dbRef = ref(db, "/");

  return await get(dbRef)
    .then((snapshot) =>
      snapshot.exists()
        ? snapshot.val()
        : console.log("No data available from FireBase")
    )
    .then((alimentos: SmaeResponse[]) =>
      // Herer comes as an objects of objects and can not be send from the previous promise as such because of typede parameters
      // still type ande legitable, tho
      Object.values(alimentos).map((item: SmaeResponse | any) => ({
        Alimento: item.Alimento,
      }))
    );

  // try {
  //   const response = await fetch(`../data/smae.json`)
  //     // const response = await fetch(`https://samedatabase-default-rtdb.firebaseio.com/smae.json`)
  //     .then((resp) => resp.json())
  //     .then((alimentos: SmaeResponse[]) =>
  //       alimentos.map((item) => {
  //         return { Alimento: item.Alimento };
  //       })
  //     );
  //   return response;
  // } catch (error) {
  //   throw "Error: json failed";
  // }
};

getJsonData()
  .then((alimentos) => {
    console.log(alimentos);
  })
  .catch((err) => console.log(err));

// const listadoCategorias = Object.values(Categoría);

// const categoriaSeleccionada = listadoCategorias[18];
// console.log(categoriaSeleccionada, listadoCategorias.length);

// getJsonDataByCategorie(categoriaSeleccionada)
//   .then((nombreAlimentos) => {
//     console.log(nombreAlimentos);
//   })
//   .catch((err) => console.log(err));

// const palabraClave = "cruda";
// console.log(`Palabra clave buscada: ${palabraClave}`);

// getJsonDataByKeyWord(palabraClave)
//   .then((nombreAlimentos) => {
//     console.log(nombreAlimentos);
//   })
//   .catch((err) => console.log(err));
