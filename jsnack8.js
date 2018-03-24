var nomi =  ["Barbara", "Simone", "Loana", "Sabrina", "Monica", "Alessio", "Massimo", "Donato", "Morgana", "Ambra", "Alba"];
var cognomi = ["Michelis", "Satta", "Borgia", "Mantovani", "DeLuca", "Bianchi", "Parietti", "Gentileschi", "Giotto", "DaVinci"];

var fakeinvited = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
]



for (var i = 0; i < 10; i++) {
  var u = Math.floor(Math.random() * 11);
  fakeinvited[i].push(nomi[u])
  var z = Math.floor(Math.random() * 10);
  fakeinvited[i].push(cognomi[z])
}

console.log (fakeinvited)
