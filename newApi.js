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