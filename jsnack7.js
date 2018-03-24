var invited1 = {
  "Nome" : "Gino",
  "Cognome" : "Rossi",
}
var invited2 = {
  "Nome" : "Loana",
  "Cognome" : "Rossi",
}
var invited3 = {
  "Nome" : "Mario",
  "Cognome" : "Rossi",
}
var invited4 = {
  "Nome" : "Marco",
  "Cognome" : "Rossi",
}
var invited5 = {
  "Nome" : "Rosa",
  "Cognome" : "Rossi",
}
var invited6 = {
  "Nome" : "Clara",
  "Cognome" : "Rossi",
}
var invited7 = {
  "Nome" : "Claudia",
  "Cognome" : "Rossi",
}
var invited8 = {
  "Nome" : "Romualdo",
  "Cognome" : "Rossi",
}
var invited9 = {
  "Nome" : "Pierpaolo",
  "Cognome" : "Rossi",
}
var invited10 = {
  "Nome" : "Alien",
  "Cognome" : "Venusian",
}

var maschili = ["Mario", "Marco", "Simone", "Gino", "Luca", "Paolo", "Romualdo", "Pierpaolo"];
var femminili = ["Loana", "Maria", "Martina", "Giulia", "Rosa", "Clara", "Claudia"];
var maleinvited = 0
var femaleinvited = 0
var allinvited = [invited1, invited2, invited3, invited4, invited5, invited6, invited7, invited8, invited9, invited10];

for (var i = 0; i < allinvited.length; i++) {
      if (maschili.includes(allinvited[i].Nome)) {
        maleinvited++
      }
      else if (femminili.includes(allinvited[i].Nome)){
        femaleinvited++
      }
}
console.log ("F " +(femaleinvited))
console.log ("M " +(maleinvited))
console.log (percentuale(femaleinvited, allinvited.length))
console.log (percentuale(maleinvited, allinvited.length))


function percentuale(num1, tot) {
  return num1 / tot * 100
}
