import { getDataDescripcion } from "./api.js";
import {addirListenerImagen} from "./DOM.js";

document.addEventListener('DOMContentLoaded', (event) => {
    let descripcionPelicula = localStorage.getItem('peliArray');

    descripcionPelicula = JSON.parse(descripcionPelicula);
    pintarDescripcion(descripcionPelicula);
});

async function pintarDescripcion(pelicula) {
    if (!pelicula) return;

    let peliculadetalle = await getDataDescripcion(pelicula.imdbID);


    const {
        Title: title,
        Year: year,
        // Rated: rated,
        // Released: released,
        Runtime: runtime,
        Genre: genre,
        Director: director,
        // Writer: writer,
        Actors: actors,
        Plot: plot,
        // Language: language,
        // Country: country,
        // Awards: awards,
        Poster: poster,
        // Ratings: ratings,
        // Metascore: metascore,
        imdbRating: imdbRating,
        // imdbVotes: imdbVotes,
        imdbID: imdbID,
        vType: type,
        // DVD: dvd,
        // BoxOffice: boxOffice,
        // Production: production,
        // Website: website,
        // Response: response
    } = peliculadetalle;

    const section = document.getElementById('movies-section');
    if (!section) return;

    const wrapper = document.createElement('div');
    wrapper.classList.add('description__wrapper');

    if (!poster || poster === "N/A") {
        poster = "https://placehold.co/375x300?text=Portada+no+encontrada";
    };
    
    const img = document.createElement('img');
    img.classList.add('description__img');
    img.src = poster;
    img.alt = `Poster de ${title}`;
    
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('description__info');

    const h2 = document.createElement('h2');
    h2.classList.add('description__title');
    h2.textContent = `${title} (${year})`;

    const pRating = document.createElement('p');
    pRating.classList.add('description__rating');
    pRating.textContent = `⭐ IMDb: ${imdbRating}`;

    const pMeta = document.createElement('p');
    pMeta.classList.add('description__meta');
    pMeta.textContent = `${genre} · ${runtime}`;

    const pDirector = document.createElement('p');
    pDirector.classList.add('description__meta');
    const strongDirector = document.createElement('strong');
    strongDirector.textContent = "Director: ";
    pDirector.append(strongDirector, director);

    const pActors = document.createElement('p');
    pActors.classList.add('description__meta');
    const strongActors = document.createElement('strong');
    strongActors.textContent = "Reparto: ";
    pActors.append(strongActors, actors);

    const descBox = document.createElement('div');
    descBox.classList.add('description__desc-box');
    const pPlot = document.createElement('p');
    pPlot.classList.add('description__desc');
    pPlot.textContent = plot;
    descBox.appendChild(pPlot);

    const link = document.createElement('a');
    link.classList.add('description__link');
    link.href = `https://www.imdb.com/title/${imdbID}/`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Ver en IMDb";

    infoDiv.append(h2, pRating, pMeta, pDirector, pActors, descBox, link);
    wrapper.append(img, infoDiv);
    section.appendChild(wrapper);
    addirListenerImagen(section);

};
