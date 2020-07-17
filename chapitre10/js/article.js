var form = document.querySelector("form");
// attente de l'evt submit du formulaire
form.addEventListener("submit", function(e) {
  e.preventDefault();
// récupération des données du formulaire avec FormData    
  var article = new FormData(form);
    //envoi de la donnée "article" à l'URL en exécutant en parallèle la function anonyme qui affiche la confirmation
  ajaxPost("https://oc-jswebsrv.herokuapp.com/article", article, function(
    reponse
  ) {
    var messageElt = document.createElement("p");
    messageElt.textContent = "L'article a bien été ajouté.";
    document.getElementById("resultat").appendChild(messageElt);
  });
});