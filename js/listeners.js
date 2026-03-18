
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
            return;
        }
        boton.textContent = "Es favorito";
        boton.classList.add('btn-fav-selec');
        favoritos.push(pelicula);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    });

    return;
}