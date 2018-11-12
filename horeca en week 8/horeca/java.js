const fris = 2.00;
const bier = 2.50;
const wijn = 4.50;

var Hoeveelfris = 0;
var Hoeveelbier = 0;
var Hoeveelwijn = 0;

var Aantal
var keuze

function bestelling() {

    while(keuze != "stop"){

        keuze = prompt("Kies: fris, bier of wijn.");

        if(keuze == "fris"){
            Aantal = parseInt(prompt("hoeveel fris wilt u?"));
            Hoeveelfris = Hoeveelfris + Aantal;
            bestelling();
        }

        else if(keuze == "bier"){
            Aantal = parseInt(prompt("hoeveel bier wilt u?"));
            Hoeveelbier = Hoeveelbier + Aantal;
            bestelling();
        }

        else if(keuze == "wijn"){
            Aantal = parseInt(prompt("hoeveel wijn wilt u?"));
            Hoeveelwijn = Hoeveelwijn + Aantal;
            bestelling();
        }
        else if(keuze == "stop"){
            berekening();
        }

        else{
            alert("U kan dit niet hier bestellen.");
            bestelling();
        }
   }
}
bestelling();

// function voor bitterballen

function bitterballen(){

}

// function voor bereken van rekening.

function berekening() {

    var Prijsfris = Hoeveelfris * fris
    var Prijsbier = Hoeveelbier * bier
    var Prijswijn = Hoeveelwijn * wijn
    var Totaalprijs = Prijsfris + Prijsbier + Prijswijn;

    if(Hoeveelfris >= 1){
        document.write("Aantal fris: " + Hoeveelfris + "<br>");
        document.write("Prijs fris: €" + Prijsfris + "<br>");
    }

    if(Hoeveelbier >= 1){
        document.write("Aantal bier: " + Hoeveelbier + "<br>");
        document.write("Prijs bier: €" + Prijsbier + "<br>");
    }

    if(Hoeveelwijn >= 1){
        document.write("Aantal wijn: " + Hoeveelwijn + "<br><br>");
        document.write("Prijs bier: €" + Prijswijn + "<br>");
    }

    document.write("<br>Totaal prijs: €" + Totaalprijs);
}
