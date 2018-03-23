// Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100 ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var rand = Math.floor((Math.random() * 100) + 1);
console.log (rand)

if (rand % 3 == 0) {
  document.write ("Fizz")
}
if (rand % 5 == 0) {
  document.write ("Buzz")
}
