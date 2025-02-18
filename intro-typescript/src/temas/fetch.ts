import type { GIFResponse } from "../interfaces/giphyResponse";
const apiKey = "dqUb7HjgwVA4wWVf3Oa2aAdoifZkuyak";

// fetch('api.giphy.com/v1/randomid')

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json())
  .then((body: GIFResponse) => {
    console.log(body.data.images["480w_still"].url);
  })
  .catch((err) => console.error(err));
