const API_KEY = "apikey=36942232";
const API_URL = "http://www.omdbapi.com/";

async function getData(parametro){
    try{
        const url = `${API_URL}?${API_KEY}&s=${parametro}`;
        const response = await fetch(url)

        if (!response.ok) {
            console.log("ha habido un error", response.status);
            return [];
        
        }
        
        const data = await response.json()
        return data

}
    catch (error){
        console.error(error);

}

}



// const titles=["a", "b", "c"]

// async function espera(titles){
//     const movies = []
//     for (let title of titles){
//         let element = await getData(title)
//         movies.push(element)
//     }
//     return movies
// }



// async function elementosApi(){
//    let batman = await getData("batman");
//    const arrayBatman = batman.Search;
//    const section = document.getElementById("movies-section");
//    for (let i of arrayBatman){

//         const article = document.createElement("article");
//         const h3 = document.createElement("h3");
//         h3.textContent = i.Title
//         article.appendChild(h3)
//         section.appendChild(article)
//    }



   async function elementosApi(){
   let batman = await getData("batman");
   const arrayBatman = batman.Search;
   const section = document.getElementById("movies-section");
   
   for (let i of arrayBatman){
        const article = document.createElement("article")
        article.innerHTML = `<div class="movie-card" data-name="NA">
        <img src="${i.Poster}" alt="Portada pelicula ${i.Title}>
        
        <div class="movie-info">
        <h3>${i.Title}</h3>
            <div class="contenedor-botones">
                <a href="#" class="btn-ver">Ver</a>
                <a href="lorax.html" class="btn-desc">Descripción</a>
            </div>
        </div>
    </div>`
    section.appendChild(article)
   }
   
//    const title = arrayBatman[0].Title;
//    const poster = arrayBatman[0].Poster;
//    console.log(title, poster)
   
}
// let resultado = espera(titles).then(async (result) => await result)


// const section = document.getElementById("movies-section")

// const article = document.createElement("article");

// const h1 = document.createElement("h1");
// h1.textContent = "Un array de lo que quieras";
// section.append(h1);


elementosApi();