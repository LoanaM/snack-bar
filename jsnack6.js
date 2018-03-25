// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invited = ["Gino", "Loana", "Marco", "Rosa", "Romualdo"];
var name = prompt ("Inserisci il tuo nome:");

if (invited.includes(name)) {
  alert ("Sei nella lista, puoi etrare!")
}
else {
  alert ("Mi spiace, non puoi entrare!")
}
