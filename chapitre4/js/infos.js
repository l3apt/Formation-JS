//récupération infos
var infos = getComputedStyle(document.getElementById("contenu"));
var hauteur_elt = document.createElement("p");
var longueur_elt = document.createElement("p");

//écriture des infos dans HTML
hauteur_elt.textContent = "Hauteur:" + infos.height;
longueur_elt.textContent = "Longeur:" + infos.width;

document.getElementById("infos").appendChild(hauteur_elt);
document.getElementById("infos").appendChild(longueur_elt);

