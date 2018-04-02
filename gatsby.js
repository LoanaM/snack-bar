var inv1 = {
  "nome":"Simone",
  "tavolo": 2
}
var inv2 = {
  "nome":"Loana",
  "tavolo": 2
}
var inv3 = {
  "nome":"Davide",
  "tavolo": 10
}
var inv4 = {
  "nome":"Alessia",
  "tavolo": 4
}
var inv5 = {
  "nome":"Federico",
  "tavolo": 5
}

var inv6 = {
  "nome":"Morgana",
  "tavolo": 5
}

var invited = [inv1,inv2,inv3,inv4,inv5,inv6];
console.log(invited)


var listainv = document.getElementById('lista');
for (var i = 0; i < invited.length; i++) {
  listainv.innerHTML += "<li>" + "Nome: " + invited[i].nome + "  Tavolo: " +invited[i].tavolo + "</li>";
}

var cerca = document.getElementById('butn');
cerca.addEventListener('click',ricerca)


function ricerca() {
  var nomeut = document.getElementById('nome').value;
  var liarray = document.getElementById('lista').childNodes;
  for (var i = 0; i < liarray.length; i++) {
    liarray[i].className = "";
    var trovato = liarray[i].innerHTML.search(nomeut);
      if (trovato>=0){
      liarray[i].className = "colored";
    }
  }
}
