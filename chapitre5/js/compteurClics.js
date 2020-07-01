var cpt = 0;

/* En JS, il semble que l'on puisse appeller une variable dans une fonciton sans la passer en paramètre
function incrementation(cpt) {
    cpt++;
    return cpt;
}

function RAZ(cpt) {
    cpt = 0;
    return cpt;
}
*/
var cptClic = document.getElementById("compteurClics");

function clic(){
    cpt++;
    document.getElementById("compteurClics").textContent = cpt;
}

function desactiver(){
    document.getElementById("clic").removeEventListener("click",clic);
}



document.getElementById("clic")
    .addEventListener("click",clic);

document.getElementById("desactiver")
    .addEventListener("click",desactiver);
