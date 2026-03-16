import { getData } from "./api.js";
import { pintarArticles } from "./DOM.js";


const section = document.getElementById("movies-section");
const input = document.getElementById("search-input");
const button = document.getElementById("search-button");


let resultadoBusqueda = localStorage.getItem('busqueda');
if (!resultadoBusqueda) {
    resultadoBusqueda = "batman";
}
let busqueda = await getData(resultadoBusqueda);



pintarArticles(busqueda);

button.addEventListener("click", async (event) => {
    event.preventDefault()
    let textoBusqueda = input.value
    busqueda = await getData(textoBusqueda)
    section.innerHTML = ""
    pintarArticles(busqueda)

    localStorage.setItem('busqueda', JSON.stringify(textoBusqueda));


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
            console.log("Ya está en favoritos");
            return;
        }
        favoritos.push(pelicula);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        console.log(favoritos);
    });

    return;
}