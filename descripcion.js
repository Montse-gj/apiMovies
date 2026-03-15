function pintarDescripcion(pelicula) {
    if (!pelicula) return;

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
    } = pelicula;

    const section = document.getElementById('movies-section');
    if (!section) return;

    const descripcionElement = document.createElement('div');
    descripcionElement.classList.add('description__wrapper');

    descripcionElement.innerHTML = `
        <img class="description__img" src="${poster}" alt="Poster de ${title}" />

        <div class="description__info">
            <h2 class="description__title">${title} (${year})</h2>
            <p class="description__rating">⭐ IMDb: ${imdbRating}</p>
            <p class="description__meta">${genre} · ${runtime}</p>
            <p class="description__meta"><strong>Director:</strong> ${director}</p>
            <p class="description__meta"><strong>Reparto:</strong> ${actors}</p>

            <div class="description__desc-box">
                <p class="description__desc">${plot}</p>
            </div>

            <a 
                href="https://www.imdb.com/title/${imdbID}/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="description__link"
            >
                Ver en IMDb
            </a>
        </div>
    `;

    section.appendChild(descripcionElement);
}

document.addEventListener('DOMContentLoaded', (event) => {
    let descripcionPelicula = localStorage.getItem('descripcion');
    descripcionPelicula = JSON.parse(descripcionPelicula);
    pintarDescripcion(descripcionPelicula);
});