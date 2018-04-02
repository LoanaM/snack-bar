// Sport Record Book
// Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti informazioni, facendo attenzione che il numero generato abbia senso:
// Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
// Numero di punti fatti
// Numero di rimbalzi
// Falli
// Percentuale di successo per tiri da 2 punti
// Percentuale di successo per  da 3 punti
// Una volta generato il “database”, il programma deve chiedere all’utente di inserire un Codice Giocatore e il programma restituisce le statistiche.


var arraygiocatori = []

for (var k = 0; k < 5; k++) {
      var giocatori = []
      //creo il codice univoco alfanumerico
      var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var unicode = []
      for (var i = 0; i < 3; i++) {
        var random = Math.floor(Math.random() * 26);
        lettcode = alphabet.charAt(random);
        unicode.push(lettcode)
      }
      for (var j = 0; j < 3; j++) {
        numbcode = (Math.floor(Math.random() * 10));
        unicode.push(numbcode)
      }
      giocatori.code = unicode.join("")

      //genero punteggi
      punti = Math.floor(Math.random() * 21);
      giocatori.points = punti
      rimbalzo = Math.floor((Math.random() * 10) + 1);
      giocatori.rimbalzi = rimbalzo
      fallo = Math.floor(Math.random() * 6);
      giocatori.falli = fallo
      successo2 = (Math.floor(Math.random() * 101)) + "%"
      giocatori.success2pt = successo2
      successo3 = (Math.floor(Math.random() * 101)) + "%"
      giocatori.success3pt = successo3
      console.log(giocatori)
      arraygiocatori.push(giocatori)
}


    var utente = prompt("Inserisci il codice")
    for (var i = 0; i < arraygiocatori.length; i++) {
      if (utente==arraygiocatori[i].code) {
      console.log(arraygiocatori[i])
      document.getElementById('codice').innerHTML = arraygiocatori[i].code
      document.getElementById('punti').innerHTML = arraygiocatori[i].points
      document.getElementById('rimbalzi').innerHTML = arraygiocatori[i].rimbalzi
      document.getElementById('falli').innerHTML = arraygiocatori[i].falli
      document.getElementById('tiri2').innerHTML = arraygiocatori[i].success2pt
      document.getElementById('tiri3').innerHTML = arraygiocatori[i].success3pt
      }
    }
