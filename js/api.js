import { ErrorFetch, ErrorRespuesta } from "./error.js";

const API_KEY = "apikey=36942232";
const API_URL = "http://www.omdbapi.com/";

export async function getData(parametro, tipoBusqueda = "s", page = 1) {
    try {
        const url = `${API_URL}?${API_KEY}&${tipoBusqueda}=${parametro}&page=${page}`;
        const response = await fetch(url);

        if (!response.ok) {

            throw new ErrorRespuesta(response.status)
        }

        const data = await response.json()
        const arraySearch = data.Search;
        const newArray = [...new Map(arraySearch.map(item => [item.imdbID, item])).values()];
        return newArray;
    }
    catch (error) {
        // console.error(error)
        throw new ErrorFetch()
    }
}



export async function getDataDescripcion(parametro, tipoBusqueda = "t") {
    try {
        const url = `${API_URL}?${API_KEY}&${tipoBusqueda}=${parametro}`;
        const response = await fetch(url);

        if (!response.ok) {

            throw new ErrorRespuesta(response.status)
        }

        const data = await response.json()
        return data;
    }
    catch (error) {
        // console.error(error)
        throw new ErrorFetch()
    }
}