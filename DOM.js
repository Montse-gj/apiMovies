export function pintarArticles(arrayPeliculas) {
    
    const section = document.getElementById("movies-section");
    for (let pelicula of arrayPeliculas) {
        if (pelicula.Poster === "N/A") {
            pelicula.Poster = "https://placehold.co/600x400?text=Portada+no+encontrada"
        }
        const article = document.createElement("article")
        article.innerHTML = `<div class="movie-card" data-name="NA">
            <img src="${pelicula.Poster}" alt="Portada pelicula ${pelicula.Title}">
            <div class="movie-info">
            <h3>${pelicula.Title}</h3>
                <div class="contenedor-botones">
                    <a href="#" class="btn-ver">Ver</a>
                    <button class = "favorites-button" type="button"> Favoritos</button>
                </div>
            </div>
        </div>`

        section.appendChild(article)
    }
}
