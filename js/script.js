var pulsanteGenera = document.getElementById("genera");
var element = document.getElementById("ticket-output");
pulsanteGenera.addEventListener("click",
function(){
    var prezzoKm =0.21;
    var nome = "";
    nome = document.getElementById("nome-viaggiatore").value;
    console.log(nome);
    var cognome = document.getElementById("cognome-viaggiatore").value;
    console.log(cognome);
    var kmTratta ="";
    kmTratta = document.getElementById("km-viaggio").value;
    console.log(kmTratta);
    var fasciaEta ="";
    fasciaEta = document.getElementById("fascia-eta").value;
    console.log(fasciaEta);
    
    if (fasciaEta == "minorenne") {
        var sconto = 20;
        var offerta = "Young Traveller"
    } else if (fasciaEta == "over65") {
        var sconto = 40;
        var offerta = "Silver Traveller"
    } else {
        var sconto = 0;
        var offerta = "Standard Traveller"
    }
    var prezzoBiglietto = (prezzoKm * kmTratta - (prezzoKm * kmTratta * sconto / 100)).toFixed(2);
    var generaCarrozza = Math.floor(Math.random() * 9)+1;
    var generaCodice = Math.floor(Math.random() * 1000)+90000;
    console.log("Il prezzo calcolato è " + prezzoBiglietto + " €")
    document.getElementById("passenger-name").innerHTML = nome + " " + cognome;
    document.getElementById("offerta").innerHTML = offerta;
    document.getElementById("carrozza").innerHTML = generaCarrozza;
    document.getElementById("codice").innerHTML = generaCodice;
    document.getElementById("costo").innerHTML = prezzoBiglietto + "€";
    element.classList.add("show");
}
);
var pulsanteAnnulla = document.getElementById("annulla");
pulsanteAnnulla.addEventListener("click",
function(){
    element.classList.remove("show");
}
);

