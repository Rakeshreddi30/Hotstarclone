let searchbar = document.getElementById("inputval");

searchbar.addEventListener("change", function(){
    searchMovies();
    // console.log(searchbar.value);
})

async function searchMovies(){
    
    try{
        let query = searchbar.value;

        let response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=6043a986`);

        let data = await response.json();
        console.log(data);
        moviesBlock(data.Search);

    }catch(error){
        console.log(error);
    }
}
function moviesBlock(movies){

    let moviesNav = document.getElementById("Navbar");
    moviesNav.innerHTML="";
    movies.forEach(function(element){
        const{imdbID,Title,Poster}=element;
    let moviesDiv = document.createElement("div");
    let image = document.createElement("img");
     image.src=Poster;
    let movieName = document.createElement("p");
    movieName.innerText=Title;
    let rate = document.createElement("p");
    rate.innerText=`IMDB : ${imdbID}`;

    moviesDiv.append(image,movieName,rate);
    moviesNav.append(moviesDiv);
    });


}