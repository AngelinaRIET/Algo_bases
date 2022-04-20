// Création d'une variable, déclaration que c'est un tableau (vide pour l'instant)
let firstNames = new Array();


firstNames=['Sokona','Sean', 'Rachel'];

console.log(firstNames);

firstNames.push("Will");

console.log(firstNames);

firstNames.unshift("April");

console.log(firstNames);

let dernierPrénom = firstNames.pop()
console.log(dernierPrénom);

let premierPrénom = firstNames.shift()
console.log(premierPrénom);