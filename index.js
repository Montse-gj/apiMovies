import { getData } from "./api.js";
import { pintarArticles } from "./DOM.js";
import { ErrorRespuesta } from "./error.js";


const section = document.getElementById("movies-section");
const input = document.getElementById("search-input");
const button = document.getElementById("search-button");


let resultadoBusqueda = sessionStorage.getItem('busqueda');
if (!resultadoBusqueda) {
    resultadoBusqueda = "batman";
}

const navPagSig = document.getElementById(`nav-pag-sig`);
let contadorPag = 1;


navPagSig.addEventListener("click", async (event) => {
    event.preventDefault();
    if (contadorPag === 1) {
        navPagRev.classList.remove(`nav-pag-ant`);
    }
    console.log(contadorPag);
    contadorPag++;
    let resultadoPagNav = await getData(resultadoBusqueda, contadorPag);
    section.innerHTML = ""
    pintarArticles(resultadoPagNav)

})

const navPagRev = document.getElementById(`nav-pag-ant`);

navPagRev.addEventListener("click", async (event) => {
    event.preventDefault();

    if (contadorPag > 1) {
        contadorPag--;
        let resultadoPagNav = await getData(resultadoBusqueda, contadorPag);
        section.innerHTML = ""
        pintarArticles(resultadoPagNav);
        console.log(contadorPag);
    }
    if (contadorPag === 1) {
        navPagRev.classList.add(`nav-pag-ant`);
    }
    // contador 1 no esta 
    // contador 2 esta
})


let busqueda = await getData(resultadoBusqueda);



pintarArticles(busqueda);

button.addEventListener("click", async (event) => {
    event.preventDefault()
    let textoBusqueda = input.value
    busqueda = await getData(textoBusqueda)
    section.innerHTML = ""


    pintarArticles(busqueda)

    sessionStorage.setItem('busqueda', JSON.stringify(textoBusqueda));


})

//-----------------funcion listener descripcion -----------------------------------------
export function anadirListenersDescripcion(article, pelicula) {

    let boton = article.querySelector(".btn-desc");


    boton.addEventListener("click", (event) => {
        event.preventDefault();


        //guardar pelicula
        localStorage.setItem('peliArray', JSON.stringify(pelicula));

        window.open('./descripcion.html', '_blank');
    });
    return;
}

//-----------------funcion listener favoritos -----------------------------------------
export function anadirListenerfavoritos(article, pelicula) {


    

    let boton = article.querySelector(".favorites-button");
    boton.addEventListener("click", (event) => {

        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        event.preventDefault();

        const yaExiste = favoritos.some(peli => peli.imdbID === pelicula.imdbID);
        if (yaExiste) {
            boton.textContent = "Es favorito";
            boton.classList.add('btn-fav-selec');
            console.log("Ya está en favoritos");
            return;
        }
        boton.textContent = "Es favorito";
        boton.classList.add('btn-fav-selec');
        favoritos.push(pelicula);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));

        console.log(favoritos);
    });

    return;
}