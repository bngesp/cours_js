// var heure = prompt("Veuillez donner une heure");

// var mondiv = document.querySelector(".heure");
// mondiv.innerHTML = "L'heure est : "+heure;

// var para2 = document.querySelector("#paragraphe2")
// para2.style.fontSize = "34px"

var p1 = document.getElementById('paragraphe1');
var p2 = document.getElementById('paragraphe2');

function changerCouleur(){  
    p1.classList.toggle('blue')
    p2.classList.toggle('rouge')
    p2.classList.toggle('blue')
    p1.classList.toggle('rouge')
}

//window.setInterval(changerCouleur, 3000);

