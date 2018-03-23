// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore


var numeri = []

for (var i = 0; i < 2; i++) {
  num = parseInt(prompt("Inserisci un numero:"));
  numeri.push(num)
}
console.log (numeri)

if (numeri[0]>numeri[1]) {
  document.write (numeri[0])
}
else {
  document.write (numeri[1])
}
