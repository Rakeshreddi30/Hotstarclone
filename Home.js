
import navbar from "./Navbar.js"
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML=navbar();
const movies = [
    {
      name: "RRR",
      rating: 8,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7642/1307642-v-3d3b6c61f97e",
    },
    {
      name: "Goodluck Jerry	",
      rating: 7,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/901/1310901-v-e9763c24f44d",
    },
    {
      name: "MSD",
      rating: 8.5,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
    },
    {
      name: "Doctor Strange",
      rating: 9,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40",
    },
    {
      name: "Ford vs Ferrari",
      rating: 8.7,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3150/813150-v",
    },
    {
      name: "Masaan",
      rating: 8.8,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/7441/1000087441/1000087441-v",
    },
    {
      name: "The lion king",
      rating: 8.4,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v",
    },
  ];
function slideShow(){

    const actionMovies = [
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6579/1734025436579-i",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8730/1707996958730-i",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/143/1731323480143-i"
    ];

let closure = document.getElementById("overlay");
let img = document.createElement("img");
img.src=actionMovies[0];
document.getElementById("image-container").append(img);
  let i=1;
 setInterval(function(){
    if(i==3){
        i=0;
    }
   img.src=actionMovies[i];
   if(i==1){
       closure.innerHTML='<img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/8973/1707996938973-t" alt="salar">';
   }else if(i==2){
    closure.innerHTML='<img src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/8249/1731323488249-t" alt="safari">';
   }else{
    closure.innerHTML='<img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/6109/1734025416109-t" alt="Harikatha">';
   }
   i++;
 },3000);
}
slideShow();

setTimeout(function(){
    moviesBlock(movies);
},2000)
function moviesBlock(movies){
  let moviesNav = document.getElementById("Navbar");
  moviesNav.innerHTML="";
    
    movies.forEach(function(element){
        const{name,rating,img}=element;
    let moviesDiv = document.createElement("div");
    let image = document.createElement("img");
     image.src=img;
    let movieName = document.createElement("p");
    movieName.innerText=name;
    let rate = document.createElement("p");
    rate.innerText=`IMDB : ${rating}`;

    moviesDiv.append(image,movieName,rate);
    moviesNav.append(moviesDiv);
    });
}
const sortButton = document.getElementById("sortButtonL").addEventListener("click",LowtoHigh);

  function LowtoHigh(){
    let low = movies.sort(function(a,b){
     return(a.rating-b.rating)
    })
    console.log(low);
    moviesBlock(low);
  }
  const sortButton2 = document.getElementById("sortButtonH").addEventListener("click",HightoLow);
  function HightoLow(){
    let high = movies.sort(function(a,b){
      return(b.rating-a.rating)
    })
    console.log(high);
    moviesBlock(high);
  }
