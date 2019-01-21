var dagen = ['maandag ','dinsdag ', 'woensdag ', 'donderdag ', 'vrijdag ','zaterdag ','zondag ']

document.write('<h2>'+'alle dagen van de week zijn:'+'<h2>')
for(var i=0; i<7;i++){
    document.write(dagen[i])
}
document.write('<h2>'+'de weekende dagen zijn:'+'<h2>')
for(var b=5; b<7; b++){
    document.write(dagen[b])
}
document.write('<h2>'+'de dagen in omgekeerde volgorde zijn:'+'<h2>')
for(var c=6; c>-1; c--){
    document.write(dagen[c])
}
document.write('<h2>'+'De werkdagen in omgekeerde volgorde zijn:'+'<h2>')
for(var d=4; d>-1;d--){
    document.write(dagen[d])
}
document.write('<h2>'+'De weekenddagen in omgekeerde volgorde zijn:'+'<h2>')
for(var z=6; z>4;z--){
    document.write(dagen[z])
}

