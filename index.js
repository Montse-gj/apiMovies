import { getData } from "./api.js";
import { pintarArticles } from "./DOM.js";


let batman = await getData("batman");

pintarArticles(batman);

const section = document.getElementById("movies-section");
const input = document.getElementById("search-input");
const button = document.getElementById("search-button");
button.addEventListener("click", async (event) => {
    event.preventDefault()
    let textoBusqueda = input.value
    let busqueda = await getData(textoBusqueda)
    section.innerHTML = ""
    pintarArticles(busqueda)
})
