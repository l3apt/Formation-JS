// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
//MA METHODE
/*
var dl_elmt = document.createElement("dl");
dl_elmt.id = "dictionnnaire"
document.getElementById("contenu").appendChild(dl_elmt);

for (i = 0; i < 3; i++){
    var dt_elt = document.createElement("dt");
    dt_elt.textContent = mots[i].terme;
    document.getElementById("dictionnaire").appendChild(dt_elt);
  
    var dd_elt = document.createElement("dd");
    dd_elt.textContent = mots[i].definition;
    document.getElementById("dictionnaire").appendChild(dd_elt);
    
}
*/
//CORRECTION

var dlElt = document.createElement("dl"); // Création de la liste

// Pour chaque mot, on construit une balise <dt> avec le terme et une balise <dd> avec sa définition
mots.forEach(function (mot) {
    var dtElt = document.createElement("dt");
    var strongElt = document.createElement("strong");
    strongElt.textContent = mot.terme;
    var ddElt = document.createElement("dd");
    ddElt.textContent = mot.definition;

    dtElt.appendChild(strongElt);
    dlElt.appendChild(dtElt);
    dlElt.appendChild(ddElt);
});

document.getElementById("contenu").appendChild(dlElt); // Ajout de la liste à la page