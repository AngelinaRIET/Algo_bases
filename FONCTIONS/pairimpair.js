// Ecrire une fonction qui prend en entrée un nombre entier, 
//affiche "Pair !" s'il est pair et "Impair !" s'il est impair 
//et "Ceci n'est pas un nombre entier !" si ce n'est pas un nombre entier

let prompt = require('prompt-sync')();

function numberType(nombre) 
{
    if (nombre % 2 == 0) 
    {
        console.log("Pair !");
    } 
    else if (nombre % 2 == 1) 
    {
        console.log("Impair !");
    } 
    else 
    {
        console.log("Ceci n'est pas un nombre entier !");
    }
}

let nombreChoisi = prompt("Ecris un nombre ");

numberType(nombreChoisi);