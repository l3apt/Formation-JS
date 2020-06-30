var couleurTexte = prompt("Entrez la couleur du texte :");
var couleurFond = prompt("Entrez la couleur du fond :");

var div_elt = document.querySelectorAll("div");

for(i=0; i< div_elt.length;i++){
    div_elt[i].style.color = couleurTexte;
    div_elt[i].style.backgroundColor = couleurFond;
}

//attention, la boucle est impérative sinon le style ne s'applique qu'au premier element