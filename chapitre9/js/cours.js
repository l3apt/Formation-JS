var articlesElt = document.getElementById("articles");
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var articles = JSON.parse(reponse);
    articles.forEach(function (article) {
        // Ajout du titre et du contenu de chaque article
        var titreElt = document.createElement("h2");
        titreElt.textContent = article.titre;
        var contenuElt = document.createElement("p");
        contenuElt.textContent = article.contenu;
        articlesElt.appendChild(titreElt);
        articlesElt.appendChild(contenuElt);
    });
});

// 
var premMinElt = document.getElementById("premMin");
// Accès aux informations publiques sur le Premier Ministre
ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function (reponse) {
    var premierMinistre = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = premierMinistre.description;
    var logoElt = document.createElement("img");
    logoElt.src = premierMinistre.logo;
    premMinElt.appendChild(descriptionElt);
    premMinElt.appendChild(logoElt);
});



var meteoElt = document.getElementById("meteo");
// Accès aux informations publiques sur le Premier Ministre
ajaxGet("http://dataservice.accuweather.com/forecasts/v1/daily/1day/171210?apikey=%20%09yEMeVRGWmZ3vptjN1q7mcDcpZ6Fqz90R%20&metric=true", function (reponse) {
    var meteoLyon = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
    console.log(meteoLyon.DailyForecasts[0].Day);
    var temperatureMini = meteoLyon.DailyForecasts[0].Temperature.Minimum.Value;
    var temperatureMaxi = meteoLyon.DailyForecasts[0].Temperature.Maximum.Value; 
    var descr = meteoLyon.DailyForecasts[0].Day.IconPhrase ;
    var descr2 = meteoLyon.DailyForecasts[0].Day.LongPhrase;
    
    var temp_elt = document.createElement("div");
    temp_elt.textContent = "Température max: " + temperatureMaxi +
        "°C et température mini " + temperatureMini + "°C." ;
    var descr_elt = document.createElement("p");
    descr_elt.textContent = descr;
    
    meteoElt.appendChild(temp_elt);
    meteoElt.appendChild(descr_elt);
});


