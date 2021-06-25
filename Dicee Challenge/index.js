randomNum1=((Math.random())*6);
randomNum1=Math.floor(randomNum1);
randomNum1 +=1;

randomNum2=((Math.random())*6);
randomNum2=Math.floor(randomNum2);
randomNum2 +=1;

switch(randomNum1){
    case 1:
        document.querySelector(".img1").setAttribute("src","images/dice1.png")
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src","images/dice2.png")
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src","images/dice3.png")
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src","images/dice4.png")
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src","images/dice5.png")
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src","images/dice6.png")
        break;
    default:
        alert("Some error occured!!");
}

switch(randomNum2){
    case 1:
        document.querySelector(".img2").setAttribute("src","images/dice1.png")
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src","images/dice2.png")
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src","images/dice3.png")
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src","images/dice4.png")
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src","images/dice5.png")
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src","images/dice6.png")
        break;
    default:
        alert("Some error occured!!");
}

if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩"
}
else
{
    document.querySelector("h1").innerHTML="🚩Player 1 wins"
}

if(randomNum1==randomNum2){
    document.querySelector("h1").innerHTML="Draw!";
    
}