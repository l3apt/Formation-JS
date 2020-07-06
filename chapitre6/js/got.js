// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

// Remplissage de la liste de choix Select
var select_elt = document.getElementById("maison");

maisons.forEach(function (maisons){
    select_elt.insertAdjacentHTML("beforeend",
    "<option value=" + maisons.code + ">" + maisons.nom + "</option>");
});

//Récupération du code de la maison sélectionnée
select_elt.addEventListener("change",function (e){
    document.getElementById("persos").innerHTML ="";
    
    var liste_persos = getPersonnages(e.target.value);  
    for (i=0;i<liste_persos.length;i++){
        var perso_elt = document.createElement("li");
        perso_elt.textContent = liste_persos[i];
        document.getElementById("persos").appendChild(perso_elt);
    }
    
 }

);