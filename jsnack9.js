var n = parseInt(prompt("Inserisci un numero:"));

arrayGroup = [];

//creo nuovi n array
for (var i = 0; i < n; i++) {
  arrayGroup.push("array" + (i));
  arrayGroup[i] = [];
}

for (var z = 0; z < arrayGroup.length; z++) {
  for (var u = 0; u < 10; u++) {
    number = Math.floor((Math.random() * 100) + 1);
    arrayGroup[z].push(number)
  }
}



console.log (arrayGroup)
