const requestUrl = '../json/peliculas.json'

async function fetchMoviesJSON(){
    const response = await fetch(requestUrl)
    const movies = await response.json();
    return movies;
}

fetchMoviesJSON().then(movies =>{
    const moviesSection = document.getElementById('moviesSection')
    const headerSection = document.getElementById('myHeader')
    for (let index = 0; index < movies.peliculas.length; index++) {
        let films = movies.peliculas[index]        
        moviesSection.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="${films.caratula}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${films.nombre}</h5>
                <p class="card-text">Clasificiación : ${films.clasificacion}</p>
                <p class="card-text">Director : ${films.director}</p>
                <a href="${films.enlace}" class="btn btn-primary" target="_blank" >Ver en Filmaffinity</a>
            </div>
        </div>`
    }
    // Header
    movies.clasificaciones.map(element=>{
      headerSection.innerHTML +=`<li class="nav-item"><a href="#" class="nav-link">${element.nombre}</a></li>`
    })
})

