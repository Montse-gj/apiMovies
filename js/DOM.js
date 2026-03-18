import { anadirListenersDescripcion, anadirListenerfavoritos } from "./index.js";

export function pintarArticles(arrayPeliculas) {

    const section = document.getElementById("movies-section");

    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];


    for (let pelicula of arrayPeliculas) {

        const yaExiste = favoritos.some(peli => peli.imdbID === pelicula.imdbID);

        if (pelicula.Poster === "N/A") {
            pelicula.Poster = "https://placehold.co/300x445?text=Portada+no+encontrada"
        }

        const article = document.createElement("article")

        let esFav = yaExiste ? `<a href="#" class="favorites-button btn-ver btn-fav-selec" > Es favorito</a>`
            : `<a href="#" class="favorites-button btn-ver" > Favoritos</a>`;

        article.innerHTML = `<div class="movie-card" data-name="NA">
            <img src="${pelicula.Poster}" alt="Portada pelicula ${pelicula.Title}">
            <div class="movie-info">
            <h3>${pelicula.Title}</h3>
                <div class="contenedor-botones">
                    <a href="#" class="btn-desc" data-id="${pelicula.imdbID}">Descripción</a> ${esFav} </div>
            </div>
        </div>`

        addirListenerImagen(article);
        section.appendChild(article);

        anadirListenersDescripcion(article, pelicula);
        anadirListenerfavoritos(article, pelicula);
    }
}

export function addirListenerImagen(article) {
    const imagen = article.querySelector("img")
    imagen.addEventListener("error", ()=>{
        imagen.src = "https://placehold.co/300x445?text=Portada+no+encontrada"
    } )
};


