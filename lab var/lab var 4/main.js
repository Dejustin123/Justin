var getallen = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var hoeveelheid = prompt('kies een getal onder de 20');


for(var i = 1; i <= hoeveelheid; i++){
    document.write(getallen[i]+"<br>");
    for(var j=1; j<=i;j++){
        document.write(getallen[j]);
    }
}
