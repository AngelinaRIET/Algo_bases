// Chargement de la fonctionnalité de saisie de l'utilisateur
let prompt = require('prompt-sync')();


let nombre;

// Début d'une boucle
do
{
    // Demande de saisir un nombre.
    nombre = prompt("Veuillez saisir un nombre : ");

    //console.log(nombre);
}
while(isNaN(nombre) == true)    // Boucle tant que la variable "nombre" n'est pas un nombre

console.log("VOUS AVEZ RÉUSSI !");


/*
if(isNaN(nombre) == false)  // Quand isNaN renvoie false cela veut dire que c'est un nombre
{
    console.log("Ceci est un nombre !");
}
else
{
    console.log("Ceci n'est pas un nombre !");
}
*/
