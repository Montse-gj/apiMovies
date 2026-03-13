import { ErrorFetch, ErrorRespuesta } from "./error.js";

const API_KEY = "apikey=36942232";
const API_URL = "http://www.omdbapi.com/";

export async function getData(parametro) {
    try {

        const url = `${API_URL}?${API_KEY}&s=${parametro}`;
        const response = await fetch(url)

        if (!response.ok) {
            // console.log("ha habido un error", response.status);
            // return [];
            throw new ErrorRespuesta(response.status)
        }

        const data = await response.json()
        const arraySearch = data.Search;

        return arraySearch
    }
    catch (error) {
        throw new ErrorFetch()
    }
}

