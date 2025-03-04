/**
 * @module JSON/Fetcher
 * @author Mario Arias netrix4@gmail>
*/

import { SmaeResponse, Categoría } from "../interfaces/SMAEResponse";


/**
 * Gets all the data from SMAE json file locallly using asyncronous fetch and looks for all the results searched by the provided keyword.
 * @function
 * @param {string} keyWord A literal of a word included in the name of the food (Alike <alike> in SQL)
 * @returns {object[]} A list of objects thst the matched results
 */
export const getJsonDataByKeyWord = async (keyWord: string) => {
  try {
    const response = await fetch(`../data/smae.json`)
      .then((resp) => resp.json())
      .then(
        (alimentos: SmaeResponse[]) =>
          alimentos.filter((item) => item.Alimento.includes(keyWord))
        // .then((alimentos: SmaeResponse[]) => alimentos.filter((item) => item.toString() .includes(keyWord))
      );
    return response;
  } catch (error) {
    throw "Error: json failed";
  }
};

/**
 * Gets all the data from SMAE json file locallly using asyncronous fetch and searched by a provided categorie name
 * @param {string} categorie Literal of a categorie to look for
 * @returns {Object[]} A list of resulting objects {Alimento: 'NameOfFood'}
 */
export const getJsonDataByCategorie = async (categorie: string) => {
  try {
    const response = await fetch(`../data/smae.json`)
      .then((resp) => resp.json())
      .then((alimentos: SmaeResponse[]) =>
        alimentos.filter((item) => item.Categoría == categorie)
      );
    return response;
  } catch (error) {
    throw "Error: json failed";
  }
};

/**
 * Gets all the data from SMAE json file locallly using asyncronous fetch. No params needed.
 * @returns {object[]} A list of all objects within the JSON file
 */
export const getJsonData = async () => {
  try {
    const response = await fetch(`../data/smae.json`)
      .then((resp) => resp.json())
      .then((alimentos: SmaeResponse[]) =>
        alimentos.map((item) => {
          return { Alimento: item.Alimento };
        })
      );
    return response;
  } catch (error) {
    throw "Error: json failed";
  }
};

getJsonData()
  .then((alimentos) => {
    console.log(alimentos);
  })
  .catch((err) => console.log(err));

const listadoCategorias = Object.values(Categoría);

const categoriaSeleccionada = listadoCategorias[15];
console.log(categoriaSeleccionada, listadoCategorias.length);

getJsonDataByCategorie(categoriaSeleccionada)
  .then((nombreAlimentos) => {
    console.log(nombreAlimentos);
  })
  .catch((err) => console.log(err));

const palabraClave = "crudo";

getJsonDataByKeyWord(palabraClave)
  .then((nombreAlimentos) => {
    console.log(nombreAlimentos);
  })
  .catch((err) => console.log(err));
