var kmTratta = parseInt (prompt ("Quanti km è la tratta che devi percorrere"));
console.log("Km tratta " + kmTratta);

var etaAcquirente = parseInt ( prompt ("Che età ha l'acquirente del biglietto?"));
console.log ("Età acquirente " + etaAcquirente);

var prezzoKm =0.21;
var sconto = 0;
var flagErrore = 0;
var prezzoBiglietto = 0;
var idTratta = document.getElementById("tratta");
var idEta = document.getElementById("eta");
var idSconto= document.getElementById("sconto");
var idPrezzoBiglietto = document.getElementById("prezzo-biglietto");
var errorClass = "";
var bottone = document.getElementById("reload");

if (!isNaN(etaAcquirente) && !isNaN(kmTratta)) {
    if (etaAcquirente < 18) {
        sconto = 20;
    } else if (etaAcquirente >= 65 && etaAcquirente <= 130) {
        sconto = 40;
    } else if (etaAcquirente > 130) {
        alert("Non credo possano esistere persone con questa età ma faccio ugualmente il calcolo, avrai uno sconto del 60%");
        sconto = 60;
    }
} else { 
    alert("Non hai inserito numeri! Errore digitazione! Aggiorna la pagina e ritenta!");
    flagErrore = 1;
    var errorClass = "errore";
}

console.log ("Flag errore = " + flagErrore);

if (flagErrore != 1 ) {
    prezzoBiglietto = (prezzoKm * kmTratta - (prezzoKm * kmTratta * sconto / 100)).toFixed(2);
    console.log("Il prezzo calcolato è " + prezzoBiglietto + " €")
    idTratta.innerHTML = "Tratta selezionata " + kmTratta + " km";
    idEta.innerHTML = "Età del viaggiatore: " + etaAcquirente + " anni";
    idSconto.innerHTML = "Sconto a cui ha diritto il viaggiatore: " + sconto + " %";
    idPrezzoBiglietto.innerHTML = "Totale biglietto " + prezzoBiglietto + " €";
} else {
    idTratta.className = errorClass;
    idTratta.innerHTML = "Errore inserimento"        
}
bottone.addEventListener("click",
function(){
location.reload();
}
);