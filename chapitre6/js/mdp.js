var mdp1_elt = document.getElementById("mdp1");
var mdp2_elt = document.getElementById("mdp2");
var regex = /[0-9]/;

var form = document.querySelector("form");
var Erreur = [
    {
        message:  "Les mots de passe sont différents"
    },
    {
        message: "Le mot de passe doit contenir au minimum 6 caractères"
    },
    {
        message: "Le mot de passe doit contenir un chiffre au minimum"
    }
];

function controlMDP(e){
    if (mdp1_elt.value != mdp2_elt.value){
        document.getElementById("infoMdp").textContent = 
            "Erreur:" + Erreur[0].message;
        e.preventDefault();
    }
    else if (mdp1_elt.value.length < 6 ||       
             mdp2_elt.value.length < 6){
        document.getElementById("infoMdp").textContent = 
            "Erreur:" + Erreur[1].message;
        e.preventDefault();
    }
    else if ( !regex.test(mdp1_elt.value) 
             || !regex.test(mdp2_elt.value) ) {
        
        document.getElementById("infoMdp").textContent = 
            "Erreur:" + Erreur[2].message;
        e.preventDefault();
        
    }
        
}

form.addEventListener("submit", controlMDP);