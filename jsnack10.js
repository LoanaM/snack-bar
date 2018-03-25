// Crea una serie di oggetti che rappresentano film, contenenti: nome del film, un array di attori, la durata in minuti, un array di voti ricevuti dalla critica e un genere. Scrivere un software che:
// Calcoli la durata media dei film
// Stampi i nomi del film che durano più di 180 minuti
// Stampi il voto medio dei film in cui hanno recitato sia “Brad Pitt” che “Angelina Jolie” (l’output dovrà quindi essere del tipo “Mr & Mrs Smith = 4.3”)
// Indicare la media dei voti per tutti i film appartenenti ad un genere (l’output dovrà essere del tipo “Azione = 3.8”, “Romantici = 39”...etc)

var film1 = {
  "nome" : "Mr & Mrs Smith",
  "attori" : ["Brad Pitt", "Angelina Jolie", "Raoul Bova"],
  "durata" : 120,
  "voti" : [7, 7, 5, 6, 8],
  "genere" : "azione",
}
var film2 = {
  "nome" : "Ben Hur",
  "attori" : ["Charlton Heston", "Stephen Boyd"],
  "durata" : 200,
  "voti" : [10, 9, 10, 8, 8],
  "genere" : "storico",
}
var film3 = {
  "nome" : "Troy",
  "attori" : ["Brad Pitt", "Orlando Bloom", "Eric Bana"],
  "durata" : 190,
  "voti" : [7, 7, 9, 6, 8],
  "genere" : "storico",
}
var film4 = {
  "nome" : "A Mighty Heart",
  "attori" : ["Brad Pitt", "Angelina Jolie"],
  "durata" : 108,
  "voti" : [8, 7, 6, 6, 8],
  "genere" : "drammatico",
}
var film5 = {
  "nome" : "Tomb Raider",
  "attori" : ["Angelina Jolie"],
  "durata" : 120,
  "voti" : [7, 5, 4, 6, 7],
  "genere" : "azione",
}
var film6 = {
  "nome" : "By the sea",
  "attori" : ["Brad Pitt", "Angelina Jolie"],
  "durata" : 132,
  "voti" : [7, 9, 8, 6, 8],
  "genere" : "drammatico",
}
var film7 = {
  "nome" : "I pirati dei Caraibi",
  "attori" : ["Johnny Depp", "Penelope Cruz"],
  "durata" : 150,
  "voti" : [9, 7, 8, 6, 8],
  "genere" : "azione",
}

var films = [film1, film2, film3,film4,film5,film6,film7]

//calcolo la durata media dei film
  var somma = 0;
  for ( var i=0; i<films.length; i++ ) {
    somma = films[i].durata + somma
  }
  result = somma / films.length

console.log(result)

//stampo i film>180
for (var i = 0; i < films.length; i++) {
  if (films[i].durata > 180) {
    document.write(films[i].nome + " ")
  }
}

//stampo la media dei film con Brangelina
for (var i = 0; i < films.length; i++) {
  if ((films[i].attori.includes("Angelina Jolie")) && (films[i].attori.includes("Brad Pitt"))) {
    console.log (films[i].nome + ": " + media(films[i].voti))
  }
}

//media per genere
var mediagenre = 0;
var dividendi = 0;
for (var i = 0; i < films.length; i++) {
    if (films[i].genere=="azione") {
      mediagenre+= media(films[i].voti)
      dividendi++
    }
}
var mediaction = (mediagenre / dividendi)
console.log ("Azione = " + mediaction)

for (var i = 0; i < films.length; i++) {
    if (films[i].genere=="storico") {
      mediagenre+= media(films[i].voti)
      dividendi++
    }
}
var mediastory = (mediagenre / dividendi)
console.log ("Storico = " + mediastory)

for (var i = 0; i < films.length; i++) {
    if (films[i].genere=="drammatico") {
      mediagenre+= media(films[i].voti)
      dividendi++
    }
}
var mediadrama = (mediagenre / dividendi)
console.log ("Drammatico = " + mediadrama)



function media (inputArray) {
  var somma = 0;
  for ( var i=0; i<inputArray.length; i++ ) {
    somma = inputArray[i] + somma
  }
  return somma / inputArray.length
}
