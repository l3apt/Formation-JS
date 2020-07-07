var bloc = document.getElementById("ballon");
var cadre = document.getElementById("cadre");
var vitesse = 7; // Valeur du déplacement en pixels
// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var largeurBloc = parseFloat(getComputedStyle(bloc).width);
var animationId = null; // Identifiant de l'animation
var direction = 1;

// Déplace le bloc sur sa gauche jusqu'au bord du cadre
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(cadre).width);
    
        if ( ( (xBloc + largeurBloc <= xMax) && (direction == 1) )||
            ((0 <= xBloc + largeurBloc) && (direction == (-1) ) ) ){ // Si le bloc n'est pas encore au début ou au bout du cadre
            console.log(direction);
            // Déplacement du bloc
            bloc.style.left = (xBloc + (vitesse *direction)) + "px";
            
            
        } 
        else{
            // changement de direction
            direction *= -1;
            console.log("changement");
            console.log(direction);
            }
    // Demande au navigateur d'appeler deplacerBloc dès que possible
    animationId = requestAnimationFrame(deplacerBloc);
}
    


var bouton_dem_elt = document.getElementById("demarrer");
var bouton_arr_elt = document.getElementById("arreter");

bouton_dem_elt.addEventListener("click", function (e){
    animationId = requestAnimationFrame(deplacerBloc); // Début de l'animation 
    bouton_dem_elt.disabled = true;
    bouton_arr_elt.disabled = false;
});

bouton_arr_elt.addEventListener("click", function (e){
    cancelAnimationFrame(animationId); // Début de l'animation 
    bloc.style.left = 0;
    bouton_dem_elt.disabled = false;
    bouton_arr_elt.disabled = true;
});