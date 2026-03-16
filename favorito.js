const contenedor = document.getElementById('contenedor-favoritos');

function renderizarFavoritos() {
    if (!contenedor) return; 
    
               // peticione de datos de localStorage

    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    contenedor.innerHTML = '';
    if (favoritos.length === 0) {
        contenedor.innerHTML = "<h3 style='color:white; width:100%; text-align:center;'>No tienes películas en favoritos.</h3>";
        return;
    }

                  //Datos de html
    favoritos.forEach((pelicula, index) => {
        const article = document.createElement("article");
        article.classList.add("movie-card"); 
        
        article.innerHTML = `
            <img src="${pelicula.Poster}" alt="${pelicula.Title}">
            <div class="movie-info">
                <h3>${pelicula.Title}</h3>
                <div class="contenedor-botones">
                    <button class="btn-borrar" data-index="${index}">Eliminar</button>
                </div>
            </div>
        `;
        contenedor.appendChild(article);
    });

                 //Asignar eventos 
    const botonesBorrar = contenedor.querySelectorAll('.btn-borrar'); 
    botonesBorrar.forEach(btn => {
        btn.onclick = (e) => {
            const index = e.currentTarget.getAttribute('data-index');
            eliminarFavorito(index);
        };
    });
}

function eliminarFavorito(indice) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos.splice(indice, 1);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    renderizarFavoritos();
}

document.addEventListener('DOMContentLoaded', renderizarFavoritos);