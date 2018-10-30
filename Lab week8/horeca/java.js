const prijsfris = 2.00;
const prijsbier = 2.50;
const prijswijn = 4.50;

var Hoeveelfris = 0;
var Hoeveelbier = 0;
var Hoeveelwijn = 0;
var hoeveel
var input;

function AddtoOrder(){
    while(input != 'stop'){
        input = prompt('bier,fris of wijn')
            if(input == 'fris'){ 
                hoeveel = parseInt(prompt('hoeveel wilt u bestellen?'));
                Hoeveelfris = Hoeveelfris + hoeveel;
                AddtoOrder();
            }
            else if(input == 'bier'){
                hoeveel = parseInt(prompt('hoeveel wilt u bestellen?'));
                Hoeveelbier = Hoeveelbier + hoeveel;
                AddtoOrder();
            }
            else if(input == 'wijn')
            hoeveel = parseInt(prompt('hoeveel wilt u bestellen?'));
            Hoeveelwijn = Hoeveelwijn + hoeveel;
            AddtoOrder();
            }
        }
        AddtoOrder();
