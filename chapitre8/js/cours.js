// Création d'une requête HTTP SYNCHRONE
/*
var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/javascript-web-server/data/langages.txt", false);
// Envoi de la requête
req.send(null);
// Affiche la réponse reçue pour la requête
console.log(req.responseText); */

//Gestion des erreurs
/*
var req = new XMLHttpRequest();
req.open("GET", "http://localhost/javascript-web-server/data/langages.txt");
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
        console.log(req.responseText);
    } else {
        // Affichage des informations sur l'échec du traitement de la requête
        console.error(req.status + " " + req.statusText);
    }
});
req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});
req.send(null); */



function afficher(reponse) {
    console.log(reponse);
}

ajaxGet("http://localhost/javascript-web-server/data/langages.txt", afficher);

var avion = {
    marque: "Airbus",
    couleur: "A320"
};
console.log(avion);
// Transforme l'objet JavaScript en chaîne de caractères JSON
var texteAvion = JSON.stringify(avion);
console.log(texteAvion);
// Transforme la chaîne de caractères JSON en objet JavaScript
console.log(JSON.parse(texteAvion));


ajaxGet("http://localhost/javascript-web-server/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});

// afficher les langages 
var liste_elt = document.getElementById("langages");
function afficherHTML(chaine) {
    console.log(chaine);
    var tab_chaine = chaine.split(";");
    
    for(i=0;i<tab_chaine.length;i++){
        console.log(tab_chaine[i]);
        
        //ajout du langage dans la page
        li_elt = document.createElement("li");
        li_elt.textContent = tab_chaine[i];
        liste_elt.appendChild(li_elt);
    }
}

ajaxGet("http://localhost/javascript-web-server/data/langages.txt", afficherHTML);

