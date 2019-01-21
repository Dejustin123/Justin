const fris = 2.00;
const bier = 2.50;
const wijn = 4.50;

const bbal8=9.50;
const bbal16=13.50;


var Hoeveelfris = 0;
var Hoeveelbier = 0;
var Hoeveelwijn = 0;

var Hoeveelbal8=0;
var Hoeveelbal16=0;

var Aantal;
var keuze;

function bestelling() {

    while(keuze != "stop"){

        keuze = prompt("Kies: fris, bier, wijn of een snack?");

        if(keuze == "fris"){
            Aantal = parseInt(prompt("hoeveel fris wilt u?"));
            Hoeveelfris = Hoeveelfris + Aantal;
            //bestelling();
        }

        else if(keuze == "bier"){
            Aantal = parseInt(prompt("hoeveel bier wilt u?"));
            Hoeveelbier = Hoeveelbier + Aantal;
            //bestelling();
        }

        else if(keuze == "wijn"){
            Aantal = parseInt(prompt("hoeveel wijn wilt u?"));
            Hoeveelwijn = Hoeveelwijn + Aantal;
            //bestelling();
        }
        else if(keuze == "snack"){
            bitterballen();
        }


        else if(keuze == "stop"){
            berekening();
        }


        else{
            alert("U kan dit niet hier bestellen.");
            //bestelling();
        }
   }
}


bestelling();



function bitterballen(){
    if( keuze == "snack"){
        Aantal=parseInt(prompt('welke hoeveelheid wilt u 8 of 16?'));
        if(Aantal =="8"){
            aantal = parseInt(prompt("hoeveel garnituren van 8 wilt u?"));
            Hoeveelbal8 = Hoeveelbal8 + Aantal
            //bestelling();
        }
        else if(Aantal == "16") {
            Aantal = parseInt(prompt("hoeveel garnituren van 16 wilt u?"));
            Hoeveelbal16 = Hoeveelbal16 + Aantal
            //bestelling();
        }
        else{
            alert("U kan dit niet hier bestellen.");
                //bestelling();
        }    
    }
    else{
        alert("U kan dit niet hier bestellen.");
           // bestelling();
    }
    //bestelling();

}

//bestelling();



function berekening() {

    var Prijsbal8 = Hoeveelbal8 * bbal8
    var Prijsbal16 = Hoeveelbal16 * bbal16
    var Prijsfris = Hoeveelfris * fris
    var Prijsbier = Hoeveelbier * bier
    var Prijswijn = Hoeveelwijn * wijn
    var Totaalprijs = Prijsfris + Prijsbier + Prijswijn +Prijsbal16 + Prijsbal8;

    if(Hoeveelfris >= 1){
        document.write("Aantal fris: " + Hoeveelfris + "<br>");
        document.write("Prijs fris: €" + Prijsfris + "<br>");
    }

    if(Hoeveelbier >= 1){
        document.write("Aantal bier: " + Hoeveelbier + "<br>");
        document.write("Prijs bier: €" + Prijsbier + "<br>");
    }

    if(Hoeveelwijn >= 1){
        document.write("Aantal wijn: " + Hoeveelwijn + "<br>");
        document.write("Prijs wijn: €" + Prijswijn + "<br>");
    }
    if(Hoeveelbal8 >= 1){
        document.write("Aantal ballen 8: " + Hoeveelbal8 + "<br>");
        document.write("Prijs ballen 8: €" + Prijsbal8 + "<br>");
    }
    if(Hoeveelbal16 >=1){
        document.write("Aantal ballen 16: " + Hoeveelbal16 + "<br>");
        document.write("Prijs ballen 16: €" + Prijsbal16 + "<br>");
    }

    document.write("<br>Totaal prijs: €" + Totaalprijs);
}
