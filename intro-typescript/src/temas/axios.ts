import Axios from "axios";

import type { GIFResponse } from "../interfaces/giphyResponse";
const apiKey = "dqUb7HjgwVA4wWVf3Oa2aAdoifZkuyak";

const giphyApi = Axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params:{
        api_key: apiKey,

    }
})
giphyApi.get<GIFResponse>(`/random`)
.then(response => console.log(response.data.data.images["480w_still"].url))
.catch(err => console.error(err))

// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

