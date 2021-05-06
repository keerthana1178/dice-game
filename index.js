var c=1;


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

  //document.firstElementChild.lastElementChild.firstElementChild.innerHTML= "player1 won..!!";
  document.getElementsByTagName("h1")[0].textContent= "👈 player1  won..!";
//  document.getElementsByTagName("h1")[0].textContent= "👈" + pl1 +" won..!";
    document.getElementsByTagName("h1")[0].style.fontSize= "3rem";

}
else if (rand1 === rand2) {
    document.getElementsByTagName("h1")[0].textContent= "   Draw..!";
      document.getElementsByTagName("h1")[0].style.fontSize= "3rem";
  }
else
  // {document.getElementsByTagName("h1")[0].textContent=  pl2+ " won..! 👉";
{  document.getElementsByTagName("h1")[0].textContent=  "player2 won..! 👉";
  document.getElementsByTagName("h1")[0].style.fontSize= "3rem";
}







//alert("yessss");
// var rand= Math.random();
// rand= Math.ceil(rand*6);
// //console.log(rand);
//
// var arr=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png" , "images/dice5.png","images/dice6.png" ];
// //var arr[6]={"images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png" , "images/dice5.png","images/dice6.png" };
// var imgg= document.getElementsByClassName("img1")[0];
// imgg.setAttribute("src", arr[rand-1]);
