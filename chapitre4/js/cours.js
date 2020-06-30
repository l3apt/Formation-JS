// On sélectionne le paragraphe et on le met en rouge, avec marge 50 pixels
var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";

// camelCase
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

//obtenir le style d'un élément
var paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color); // Affiche "red"
console.log(paragraphesElts[1].style.color); // Affiche "green"
console.log(paragraphesElts[2].style.color); // N'affiche rien

//getComputedStyle
var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB