const API_KEY = "apikey=36942232";
const API_URL = "http://www.omdbapi.com/";

async function getData(parametro){
    try{
        const url = `${API_URL}?${API_KEY}&t=${parametro}`;
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



const titles=["a", "b", "c"]

async function espera(titles){
    const movies = []
    for (let title of titles){
        let element = await getData(title)
        movies.push(element)
    }
    return movies
}

// let resultado = espera(titles).then(async (result) => await result)

async function conseguirDatos(){
    const results = await espera(titles)
    console.log(results)

} 
conseguirDatos();