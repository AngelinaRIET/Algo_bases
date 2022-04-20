//Créer un tableau avec le nom des personnes de la classe
// Ecrire une fonction qui prend en paramètre une chaine de caractère. 
// Si le prénom est dans la classe, afficher "Bonjour [prénom]". Sinon, afficher "Qui êtes-vous ?"

let prompt = require('prompt-sync')();

let listePrénoms = ["Anibal", "Anil", "Angélina", "Annette", "April", "Aurore", "Didier"];

function prénoms(prénom)
{
    let prénomTrouvé = false;

    for (let i = 0; i < listePrénoms.length; i++) 
    {
        if (listePrénoms[i] == prénom) 
        {
            prénomTrouvé = true;
        }
    }

    if (prénomTrouvé == true) 
    {
        console.log("bonjour " + prénom)
    } 
    else 
    {
        console.log("Qui êtes vous ?")
    }
}

prénomSaisi = prompt("Donne moi ton prénom")

prénoms(prénomSaisi)