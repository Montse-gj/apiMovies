import { ErrorFetch, ErrorRespuesta } from "./error.js";
import { API_KEY } from "./apiKey.js";

const API_URL = "https://api.themoviedb.org/3";
const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
};

// https://developer.themoviedb.org/reference/discover-movie
export async function getDiscoverData(page = 1) {
    try {
        const url = `${API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}}&sort_by=popularity.desc`;
        const response = await fetch(url, OPTIONS);
        if (!response.ok) throw new ErrorRespuesta(response.status);
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.log(error);
        throw new ErrorFetch()
    };
};

// https://developer.themoviedb.org/reference/search-movie
export async function getMovieData(query, page = 1) {
    try {
        const url = `${API_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
        const response = await fetch(url, OPTIONS);
        if (!response.ok) throw new ErrorRespuesta(response.status);
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        throw new ErrorFetch()
    };
};