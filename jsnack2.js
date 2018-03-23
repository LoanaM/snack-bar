var parole = []

for (var i = 0; i < 2; i++) {
  word = prompt("Inserisci una parola:");
  parole.push(word)
}
console.log (parole)

var split1 = parole[0].split("")
var split2 = parole[1].split("")

if (split1.length < split2.length) {
  document.write (parole[0])
  document.write (parole[1])
}
else {
  document.write (parole[1])
  document.write (parole[0])
}
