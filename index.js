function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}
var r1=randomNumber(1,7)
r1image="dice"+r1+".png";
imag="images/"+r1image;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imag)

var r2=randomNumber(1,7)
r2image="dice"+r2+".png";
ima="images/"+r2image;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",ima)

if(r1>r2)
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
else if(r2>r1) 
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
else    
    document.querySelector("h1").innerHTML = "DRAW"
