const getSearchText = () => {

    const button = document.querySelector("#submit");

    button.addEventListener("click", (event) => {

        event.preventDefault();

        // console.log("Dio click");

        const searchText = document.querySelector("#movieSearchTitle").value ? document.querySelector("#movieSearchTitle") : alert("No escribió nada"); // if en una linea

        // console.log(searchText.value);

        testApi(searchText.value);

    })
};

getSearchText();

// Definir funciones

const testApi = async (searchText) => {

    let URL = `http://www.omdbapi.com/?apikey=d0d830ce&t=${searchText}&type=movie`;

    try {

        const res = await fetch(URL, { method: "GET" });
        const data = await res.json();

        console.log(data);

        drawMovies(data);

    } catch (error) {

        console.log(error);

    }
};

const drawMovies = (data) => {

    const divImagen = document.getElementById("imagen")
    const divInformation = document.getElementById("informacion")

    divImagen.innerHTML = "";
    divInformation.innerHTML = "";

    // console.log(divMovies);

    const movieDataArray = [];

    const moviePoster = document.createElement("img");
    moviePoster.src = data.Poster;
    moviePoster.alt = "Poster: " + data.Title;
    divImagen.appendChild(moviePoster);

    /* const movieTitle = document.createElement("h1")
    movieTitle.textConten = data.Title;
    divMovies.appendChild(movieTitle) */

    for (const key in data) {

        movieDataArray.push(key + ": " + data[key])

    };

    movieDataArray.map((item, index) => {

        if (index <= 8) {

            const elementMovie = document.createElement("h4")
            elementMovie.textContent = item;
            divInformation.appendChild(elementMovie);

        }

    })

}