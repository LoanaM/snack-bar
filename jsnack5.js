// Crea il gioco carta sasso e forbice: una manche è formata da 3 giocate. In ogni giocata il computer chiede all’utente di scegliere tra carta, sasso e forbice. Al termine della manche, il computer deve comunicare il punteggio.

var punteggio1 = 0;
var punteggio2 = 0;

//creo la manche
for (var i = 0; i < 3; i++) {
    player1 = prompt("Fai una giocata (giocatore1):");
    player2 = prompt("Fai una giocata (giocatore2):");
    if ((player1=="forbici") && (player2=="sasso")) {
      punteggio2++
    }
    else if ((player1=="sasso") && (player2=="forbici")) {
      punteggio1++
    }
    else if ((player1=="carta") && (player2=="forbici")) {
      punteggio2++
    }
    else if ((player1=="forbici") && (player2=="carta")) {
      punteggio1++
    }
    else if ((player1=="sasso") && (player2=="carta")) {
      punteggio2++
    }
    else if ((player1=="carta") && (player2=="sasso")) {
      punteggio1++
    }
}

//decreto il punteggio finale
if (punteggio1 > punteggio2) {
  alert ("Giocatore 1 ha vinto")
}
else if (punteggio1 < punteggio2) {
  alert ("Giocatore 2 ha vinto")
}
else {
  alert ("Pareggio!")
}
