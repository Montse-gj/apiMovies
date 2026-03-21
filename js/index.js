import { getData } from "./api.js";
import { pintarArticles } from "./DOM.js";


const section = document.getElementById("movies-section");
const input = document.getElementById("search-input");
const button = document.getElementById("search-button");
const navPagSig = document.getElementById('nav-pag-sig');
const navPagRev = document.getElementById('nav-pag-ant');

let contadorPag = 1;

let resultadoBusqueda = sessionStorage.getItem('busqueda');
if (!resultadoBusqueda) {
    resultadoBusqueda = "batman";navPagSig
}

let busqueda = await getData(resultadoBusqueda);
pintarArticles(busqueda);


navPagSig.addEventListener("click", async (event) => {
    event.preventDefault();
    if (contadorPag === 1) {
        navPagRev.classList.remove(`nav-pag-ant`);
    }
    
    contadorPag++;
    let resultadoPagNav = await getData(resultadoBusqueda, contadorPag);
    section.innerHTML = ""
    pintarArticles(resultadoPagNav)
    
})


navPagRev.addEventListener("click", async (event) => {
    event.preventDefault();

    if (contadorPag > 1) {
        contadorPag--;
        let resultadoPagNav = await getData(resultadoBusqueda, contadorPag);
        section.innerHTML = ""
        pintarArticles(resultadoPagNav);
    
    }
    if (contadorPag === 1) {
        navPagRev.classList.add(`nav-pag-ant`);
    }
})


button.addEventListener("click", async (event) => {
    event.preventDefault()
    let textoBusqueda = input.value
    busqueda = await getData(textoBusqueda)
    section.innerHTML = ""

    pintarArticles(busqueda)

    sessionStorage.setItem('busqueda', JSON.stringify(textoBusqueda));

})