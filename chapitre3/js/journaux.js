//TP exo2
// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"


// au début, solution avec tableau ul/li mais autre solution adoptée avec elements a avec balises br
/*
var ul_elt = 
    document.createElement("ul");
ul_elt.id = "journaux"; 
document.getElementById("contenu").appendChild(ul_elt); */

for(i=0; i< journaux.length; i++){
    var journal_elt = document.createElement("a");
    journal_elt.href = journaux[i];
    journal_elt.textContent = journaux[i];
    document.getElementById("contenu").appendChild(journal_elt);
   document.getElementById('contenu').insertAdjacentHTML("beforeEnd",'<br />');
}