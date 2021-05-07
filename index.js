
document.getElementById("btn").onclick = game;
function game(){
var rand1 = Math.floor(Math.random() *6) +1;
var randimg = "dice"+rand1+".png";
var randimgsrc= "images/" +randimg;
var imgg1 = document.querySelectorAll("img")[0];
imgg1.setAttribute("src",randimgsrc);

var rand2 = Math.floor(Math.random() *6) +1;
var randimg2 = "dice"+rand2+".png";
var randimgsrc2 = "images/" +randimg2;
var imgg2 = document.querySelectorAll("img")[1];
imgg2.setAttribute("src",randimgsrc2);

if(rand1>rand2){


  document.getElementsByTagName("h1")[0].textContent= "👈 player1  won..!";

    document.getElementsByTagName("h1")[0].style.fontSize= "3rem";

}
else if (rand1 === rand2) {
    document.getElementsByTagName("h1")[0].textContent= "   Draw..!";
      document.getElementsByTagName("h1")[0].style.fontSize= "3rem";
  }
else
  
{  document.getElementsByTagName("h1")[0].textContent=  "player2 won..! 👉";
  document.getElementsByTagName("h1")[0].style.fontSize= "3rem";
}

}




