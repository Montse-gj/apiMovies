let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

export function selectionFavorites(getBusqueda, section) {
    section.addEventListener("click", (event) => {
        if (!event.target.matches(".favorites-button")) return;
        const article = event.target.closest("article");
        if (!article) return;
        const articles = Array.from(section.querySelectorAll("article"));
        const arrayPositions = articles.indexOf(article);
        const peliculaSelec = getBusqueda()[arrayPositions];
        const yaExiste = favoritos.some(peli => peli.imdbID === peliculaSelec.imdbID);
        if (yaExiste) {
            console.log("Ya está en favoritos");
            return;
        }
        favoritos.push(peliculaSelec);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        console.log(favoritos);
    });
}