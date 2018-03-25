
// Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
// Al termine della generazione, stampa l’array la cui somma degli elementi è la maggiore.

var n = parseInt(prompt("Inserisci un numero:"));

arrayGroup = [];
somma = 0;
somme = [];

//creo nuovi n array
for (var i = 0; i < n; i++) {
  arrayGroup.push("array" + (i));
  arrayGroup[i] = [];
}

for (var z = 0; z < arrayGroup.length; z++) {
  for (var u = 0; u < 10; u++) {
    number = Math.floor((Math.random() * 100) + 1);
    arrayGroup[z].push(number)
  }
}
console.log (arrayGroup)

//faccio le somme di tutti gli array e li inserisco in "somme"
for (var a = 0; a < arrayGroup.length; a++) {
  for (var i = 0; i < 10; i++) {
  somma+= arrayGroup[a][i]
  }
  somme.push(somma)
}
console.log (somme)

var w = 1

for (y = 0; y < somme.length; y++) {
  for (var k = 0; k < somme.length; k++) {
    control = 1
    if (somme[y] >= somme[w]) {
      w++
      control++
    }
    if (control==somme.length) {
      console.log (arrayGroup[y])
    }
  }
}
