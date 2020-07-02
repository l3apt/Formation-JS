function ajouterDessert(){
    var nouveau_dessert = prompt("ajoutez un dessert");
    var dessert_HTML = "<li>" + nouveau_dessert + "</li>"
    document.getElementById("desserts").
    insertAdjacentHTML("beforeend",dessert_HTML);
}


var bouton_elt = document.querySelector("button");


bouton_elt.addEventListener("click",ajouterDessert);

