

var form = document.querySelector("form");

form.addEventListener("submit", function (e){
    e.preventDefault();
    // Création d'un objet représentant le temoignage
    var temoignage = {
        pseudo:  e.target.elements.pseudo.value,
        evaluation: e.target.elements.evaluation.value,
        message: e.target.elements.message.value,
    };
    // Envoi de l'objet au serveur
    ajaxPost(" https://oc-jswebsrv.herokuapp.com/api/temoignage", temoignage,
        function (reponse) {
            // Le film est affiché dans la console en cas de succès
            console.log("Le témoignage " + JSON.stringify(temoignage) + " a été envoyé au serveur");
        },
        true // Valeur du paramètre isJson
            );
});
