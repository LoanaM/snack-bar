//for version
somma = 0
for (var i = 0; i < 5; i++) {
  num = parseInt(prompt("Inserisci un numero"));
  somma+=num
}
console.log (somma)


//do version
total = 0
var i = 0
do {
  number = parseInt(prompt("Inserisci un numero"));
  total+=number
  i++
} while (i<5)

console.log (total)
