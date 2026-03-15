
function pintarDescripcion(pelicula) {

    const { // https://www.omdbapi.com/?t=batman&apikey=36942232
        Title: title,
        Year: year,
        Rated: rated,
        Released: released,
        Runtime: runtime,
        Genre: genre,
        Director: director,
        Writer: writer,
        Actors: actors,
        Plot: plot,
        Language: language,
        Country: country,
        Awards: awards,
        Poster: poster,
        // Ratings: ratings,
        Metascore: metascore,
        imdbRating: imdbRating,
        imdbVotes: imdbVotes,
        imdbID: imdbID, // https://www.imdb.com/es-es/title/tt22202452/
        Type: type,
        DVD: dvd,
        BoxOffice: boxOffice,
        Production: production,
        Website: website,
        // Response: response
    } = pelicula;

    `
    <div class="description__wrapper">
        <img class="description__img" id="description-img" src="${img}" alt="Detalle de la carta" />
        <div class="description__info">
            <h2 class="description__title" id="description-title">${name}</h2>
            <p class="description__price">${price}</p>
            <div class="description__desc-box">
                <p class="description__desc" id="description-desc">${desc}</p>
            </div>
            <button class="description__button" id="${id}">Añadir al carrito</button>
        </div>
    </div>
    `;

    `
    <div class="description__wrapper">
        <img 
            class="description__img" 
            id="description-img" 
            src="${poster}" 
            alt="Poster de ${title}" 
        />

        <div class="description__info">
            <h2 class="description__title" id="description-title">
                ${title} (${year})
            </h2>

            <p class="description__price">
                IMDb: ${imdbRating}
            </p>

            <p class="description__meta">
                ${genre} · ${runtime}
            </p>

            <p class="description__meta">
                Director: ${director}
            </p>

            <p class="description__meta">
                Reparto: ${actors}
            </p>

            <div class="description__desc-box">
                <p class="description__desc" id="description-desc">
                    ${plot}
                </p>
            </div>

            <button 
                class="description__button" 
                id="${imdbID}"
            >
                Añadir a favoritos
            </button>
        </div>
    </div>
    `;

};

document.addEventListener('DOMContentLoaded', (event) => {
    const descripcionPelicula = localeStorage.getItem('descripcion');
    pintarDescripcion(descripcionPelicula);
});