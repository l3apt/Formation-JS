var tab_elt =  document.getElementById("tableaux");

// fonction à executer lorsque l'on appelle le tableaux.json
function insererTableaux(data){
    // Transforme la réponse en tableau d'objets JavaScript
    var tableaux = JSON.parse(data);
    // Affiche le titre de chaque film
    tableaux.forEach(function (tableau) {
        var tr_elt = document.createElement("tr");
       /* 
       // première version : remplace le tr existant
        var nom_elt = document.createElement("td");
        nom_elt.textContent = tableau.titre;
        var annee_elt = document.createElement("td");
        annee_elt.textContent = tableau.annee;
        var auteur_elt = document.createElement("td");
        auteur_elt.textContent = tableau.auteur;
        tr_elt.appendChild(nom_elt);
        tr_elt.appendChild(annee_elt);
        tr_elt.appendChild(auteur_elt);
        tab_elt.appendChild(tr_elt); */
        tr_elt.innerHTML = "<td>" + tableau.titre + "</td>" + "<td>" + tableau.annee + "</td>" +
            "<td>" + tableau.auteur + "</td>";
        tab_elt.appendChild(tr_elt);
        
    })
  }
                  
                  
ajaxGet("http://localhost/javascript-web-server/data/tableaux.json",insererTableaux);
