// chronomètre
var bouton_elt = document.getElementById("bouton");
var secondes = 0;
var chrono_elt = document.getElementById("chrono");
var intervalId = null;
var etat_chrono = false;
bouton_elt.textContent = "Démarrer";

function compterSeconde() {
    secondes++;
    chrono_elt.textContent = secondes + " seconde(s) écoulée(s)";
}
function arretChrono(){
    
    secondes = 0;
    bouton_elt.textContent = "Démarrer";
    chrono_elt.textContent = secondes + " seconde(s) écoulée(s)";
}

bouton_elt.addEventListener("click", function (e){
    if (etat_chrono == false){
        bouton_elt.textContent = "Arrêter";
        intervalId = setInterval(compterSeconde,1000);
        etat_chrono = true;
    }
    else {
        arretChrono();
        clearInterval(intervalId);
        etat_chrono = false;
    }
    
});
