var nomi =  ["Barbara", "Simone", "Loana", "Sabrina", "Monica", "Alessio", "Massimo"];
var cognomi = ["Michelis", "Satta", "Borgia", "Mantovani", "DeLuca", "Bianchi"];

var invited1 = {
  "color" : "red",
}

invited1.Nome="Morgana";
console.log (invited1)


var fakeinvited = [];

for (var i = 0; i < 5; i++) {
  var u = Math.floor(Math.random() * 7);
  fakeinvited.push(nomi[u])
  var z = Math.floor(Math.random() * 6);
  fakeinvited.push(cognomi[z])
}

console.log (fakeinvited)
