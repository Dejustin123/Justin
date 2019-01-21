var input = prompt('Hoeveel namen wilt u in de array stoppen? (minimaal 3)');
var mensen = [];

for (var i=1; i<=input; i++) {
    var namen = prompt('Geef de ' + i + 'e naam op.');
    mensen.push(namen);

}

document.write(mensen + ' ');