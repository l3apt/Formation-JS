var div_elt = document.querySelectorAll("div");
var couleur;

function changerCouleur(couleur) {
    switch (couleur) {
        case "r":
            for (i=0;i<div_elt.length;i++){
                div_elt[i].style.backgroundColor = "red"
            }
            break;
        case "j":
             for (i=0;i<div_elt.length;i++){
                div_elt[i].style.backgroundColor = "yellow"
            }
            break;
        case "v":
             for (i=0;i<div_elt.length;i++){
                div_elt[i].style.backgroundColor = "green"
            }
            break;
        case "b":
             for (i=0;i<div_elt.length;i++){
                div_elt[i].style.backgroundColor = "white"
            }
            break;
    }
}
            
document.addEventListener("keypress", function (e) {
    couleur = String.fromCharCode(e.charCode);
    changerCouleur(couleur);
});