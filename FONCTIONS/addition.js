// Ecrire une fonction
// qui prend en paramètre 2 nombres (a et b)
// affiche le résultat de leur addition
// utiliser prompt pour passer les paramètres

let prompt = require('prompt-sync')();

function addition(a, b) {
   return parseFloat(a) + parseFloat(b);
}
let nombre1 = prompt("Donne moi un premier nombre");
let nombre2 = prompt("Donne moi un deuxième nombre");

console.log(addition(nombre1, nombre2));