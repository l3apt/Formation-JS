// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// Suppression du contenu HTML de la liste
//document.getElementById("langages").innerHTML = "";

// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

// Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");


// Remplacement d'attribut
var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut"); // Suppression de la classe "debut"
titreElt.classList.add("titre"); // Ajout de la classe "titre"
console.log(titreElt);

// AJOUTER un element
var pythonElt = document.createElement("li"); // Création d'un élément li
pythonElt.id = "python"; // Définition de son identifiant
pythonElt.textContent = "Python"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément

// ajout d'un nouveau ul avec id = tableau (test perso)
var ul_element = document.createElement("ul");
ul_element.id = "tableau";
document.getElementById("contenu").appendChild(ul_element);

// supression tableau ul
document.getElementById("contenu").
            removeChild(document.getElementById("tableau"));

// ajout élément avec textNode
var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément


// ajout avant un noeud
var perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt, 
    document.getElementById("php"));

// ajout avec insertAdjacentsHTML
// Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin", 
    '<li id="javascript">JavaScript</li>');


// REMPLACER ELEMENT
var bashElt = document.createElement("li"); // Création d'un élément li
bashElt.id = "bash"; // Définition de son identifiant
bashElt.textContent = "Bash"; // Définition de son contenu textuel
// Remplacement de l'élément identifié par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

//SUPPRIMER ELEMENT BASH
document.getElementById("langages").
        removeChild(document.getElementById("bash"));

// TP exo 1
document.getElementById('langages').insertAdjacentHTML("afterEnd", 
    '<p>En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation"> liste</a> plus complète</p>');

