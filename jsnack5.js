var player1 = prompt("Fai una giocata:");
var player2 = prompt("Fai una giocata:");
var punteggio1 = 0;
var punteggio2 = 0;


if ((player1=="forbici") && (player2=="sasso")) {
  alert ("Giocatore 2 ha vinto")
}
else if ((player1=="sasso") && (player2=="forbici")) {
  alert ("Giocatore 1 ha vinto")
}
else {
  alert ("Pareggio!")
}
