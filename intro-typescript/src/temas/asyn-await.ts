import { GIFResponse } from "../interfaces/giphyResponse";
import { giphyApi } from "./axios";

export const obtenerImagen = async () => {
  try {
    const response = await giphyApi.get<GIFResponse>("/random");
    return response.data.data.images["480w_still"].url;
  } catch (error) {
    throw "Error: api failed";
  }
};

obtenerImagen()
  .then((url) => console.log(url))
  .catch((err) => console.log(err));

// console.log(obtenerImagenPromesa());
