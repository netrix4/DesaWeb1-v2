import { SmaeResponse, Categoría } from "../interfaces/SMAEResponse";

// fetch(`../data/smae.json`)
//   .then((resp) => resp.json())
//   .then((alimentos: SmaeResponse[]) => {
//     // const alimento = alimentos[50];
//     const nommbresDeALimentos = alimentos.map((item) => `${item.Alimento}\n`);

//     // console.log(
//     //   `La respuesta del api locales: \nNombre: ${
//     //     alimento.Alimento
//     //   }\nCategoria: ${alimento.Categoría.toString()}\n`
//     // );

//     console.log(
//       `Estos son los nombres de todos los alimentos:\n${nommbresDeALimentos}`
//     );
//   })
//   .catch((err) => console.error(err));

// Sacar solo las categorias unicassss

//Todo
// No traer los alimentos de cierta categoria

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

const listadoCategorias = Object.values(Categoría);

const categoriaSeleccionada = listadoCategorias[15];
console.log(categoriaSeleccionada, listadoCategorias.length);

getJsonDataByCategorie(categoriaSeleccionada)
  .then((nombreAlimentos) => {
    // const listaFormateada = nombreAlimentos
    console.log(nombreAlimentos);
  })
  .catch((err) => console.log(err));
