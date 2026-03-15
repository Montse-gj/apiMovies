import { getData } from "./api.js";
import { pintarArticles } from "./DOM.js";
import { selectionFavorites } from "./favoritos.js";

const section = document.getElementById("movies-section");
const input = document.getElementById("search-input");
const button = document.getElementById("search-button");

let busqueda = await getData("batman");
pintarArticles(busqueda);


const getBusqueda = () => busqueda;
selectionFavorites(getBusqueda, section);


button.addEventListener("click", async (event) => {
    event.preventDefault()
    let textoBusqueda = input.value
    busqueda = await getData(textoBusqueda)
    section.innerHTML = ""
    pintarArticles(busqueda)

})


