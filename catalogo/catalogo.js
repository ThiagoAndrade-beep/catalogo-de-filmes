const btnLogin = document.querySelector(".btn-login")
const filmesContainer = document.querySelector(".container-filmes")
const filter = document.querySelector("#filter-select")
const searchMovie = document.querySelector("#search-movie")
const movieTitle = document.querySelector("#movie-title")

if (localStorage.getItem("usuarios")) {
    
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if(usuarios.length > 0) {
        const ultimoEmail = usuarios[usuarios.length - 1].email;
        const primeiraLetra = ultimoEmail.charAt(0).toUpperCase();

        btnLogin.style.display = 'block'
        btnLogin.textContent = primeiraLetra
    }

}

btnLogin.addEventListener("click", () => {
    window.location.href = '../index.html'
})

const apiKey = "c272d09385c7e19c1ca75bc24e1491f0"
const urlFilmesPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
const urlFilmesEmAlta = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
const urlFilmesEmCartazes = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
const urlFilmesLançamentoFuturo = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'; 


async function fetchFilmesPopulares() {
    try {
        const response = await fetch(urlFilmesPopulares)
        const data = await response.json()
        return data.results
    }catch (error) {
        console.error('Erro ao buscar o filme', error)
        return[]
    }
}

function renderMoviesPopulares(movies) {
    movies.forEach(movie => {
        const movieCard = document.createElement("div")
        movieCard.classList.add('filme')

        movieCard.innerHTML = `
            <img src="${movie.poster_path ? IMG_BASE_URL + movie.poster_path : 'img/placeholder.jpg'}" alt="${movie.title}">
            <div class="filme-content">
                <h2>${movie.title}</h2>
                <div class="filme-classification">
                    <p>${movie.vote_average.toFixed(1)}</p>
                    <i class="bi bi-star"></i>
                </div>
                <p class="filme-description">${movie.overview || 'Descrição não disponível.'}</p>
                <div class="filme-btn">
                    <button id="view-details-btn" data-id="${movie.id}">VER DETALHES</button>
                    <button id="add-list-btn" data-id="${movie.id}">ADICIONAR A MINHA LISTA</button>
                </div>
            </div>
        `;
        filmesContainer.appendChild(movieCard)
    })
}

async function initFilmesPopulares() {
    const movies = await fetchFilmesPopulares();
    renderMoviesPopulares(movies);
}
initFilmesPopulares()

async function fetchFilmesEmAlta() {
    try {
        const response = await fetch(urlFilmesEmAlta)
        const data = await response.json()
        return data.results
        
    }catch (error) {
        console.error("Erro ao encontrar o filme", error)
        return []
    }
}

function renderMoviesEmAlta(movies) {
    movies.forEach(movie => {
        const movieCard = document.createElement("div")
        movieCard.classList.add('filme')

        movieCard.innerHTML = `
            <img src="${movie.poster_path ? IMG_BASE_URL + movie.poster_path : 'img/placeholder.jpg'}" alt="${movie.title}">
            <div class="filme-content">
                <h2>${movie.title}</h2>
                <div class="filme-classification">
                    <p>${movie.vote_average.toFixed(1)}</p>
                    <i class="bi bi-star"></i>
                </div>
                <p class="filme-description">${movie.overview || 'Descrição não disponível.'}</p>
                <div class="filme-btn">
                    <button id="view-details-btn" data-id="${movie.id}">VER DETALHES</button>
                    <button id="add-list-btn" data-id="${movie.id}">ADICIONAR A MINHA LISTA</button>
                </div>
            </div>
        `;
        filmesContainer.appendChild(movieCard)
    })
}

async function initFilmesEmAlta() {
    const movies = await fetchFilmesEmAlta();
    renderMoviesEmAlta(movies);
}

async function fetchFilmesEmCartaz() {
    try {
        const response = await fetch(urlFilmesEmCartazes)
        const data = await response.json()
        return data.results
    }catch(error) {
        console.error('Erro ao encontrar o filme', error)
        return[]
    }
}

function renderMoviesEmCartaz(movies) {
    movies.forEach(movie => {
        const movieCard = document.createElement("div")
        movieCard.classList.add('filme')

        movieCard.innerHTML = `
            <img src="${movie.poster_path ? IMG_BASE_URL + movie.poster_path : 'img/placeholder.jpg'}" alt="${movie.title}">
            <div class="filme-content">
                <h2>${movie.title}</h2>
                <div class="filme-classification">
                    <p>${movie.vote_average.toFixed(1)}</p>
                    <i class="bi bi-star"></i>
                </div>
                <p class="filme-description">${movie.overview || 'Descrição não disponível.'}</p>
                <div class="filme-btn">
                    <button id="view-details-btn" data-id="${movie.id}">VER DETALHES</button>
                    <button id="add-list-btn" data-id="${movie.id}">ADICIONAR A MINHA LISTA</button>
                </div>
            </div>
        `;
        filmesContainer.appendChild(movieCard)
    })
}

async function initFilmesEmCartaz() {
    const movies = await fetchFilmesEmCartaz();
    renderMoviesEmCartaz(movies);
}

async function fetchFilmesLançamentoFuturo() {
    try {
        const response = await fetch(urlFilmesLançamentoFuturo)
        const data = await response.json()
        return data.results
    }catch(error) {
        console.error('Error ao encontrar o filme', error)
        return[]
    }
}

function renderMoviesLançamentoFuturo(movies) {
    movies.forEach(movie => {
        const movieCard = document.createElement("div")
        movieCard.classList.add('filme')

        movieCard.innerHTML = `
            <img src="${movie.poster_path ? IMG_BASE_URL + movie.poster_path : 'img/placeholder.jpg'}" alt="${movie.title}">
            <div class="filme-content">
                <h2>${movie.title}</h2>
                <div class="filme-classification">
                    <p>${movie.vote_average.toFixed(1)}</p>
                    <i class="bi bi-star"></i>
                </div>
                <p class="filme-description">${movie.overview || 'Descrição não disponível.'}</p>
                <div class="filme-btn">
                    <button id="view-details-btn" data-id="${movie.id}">VER DETALHES</button>
                    <button id="add-list-btn" data-id="${movie.id}">ADICIONAR A MINHA LISTA</button>
                </div>
            </div>
        `;
        filmesContainer.appendChild(movieCard)
    })
}

async function initFilmesLançamentoFuturo() {
    const movies = await fetchFilmesLançamentoFuturo();
    renderMoviesLançamentoFuturo(movies);
}


filter.addEventListener("change", (e) => {
    const filterSelect = e.target.value
    filmesContainer.innerHTML = ''

    switch(filterSelect) {
        case "popular":
            initFilmesPopulares();
            movieTitle.textContent = "Filmes populares"
            break
        case "alta":
            initFilmesEmAlta()
            movieTitle.textContent = "Filmes em alta"
            break
        case "cinema":
            initFilmesEmCartaz()
            movieTitle.textContent = "Filmes em cartaz"
            break
        case "lançamento-futuro":
            initFilmesLançamentoFuturo()
            movieTitle.textContent = "Filmes que estão prestes a lançar"
    }
})

searchMovie.addEventListener("keyup", (e) => {
    const search = e.target.value.toLowerCase(); 

    const filmes = document.querySelectorAll(".filme"); 

    filmes.forEach(filme => {
        const titulo = filme.querySelector("h2").textContent.toLowerCase();
        if (titulo.startsWith(search)) {
            filme.style.display = "block";
        } else {
            filme.style.display = "none";
        }
    });
});





