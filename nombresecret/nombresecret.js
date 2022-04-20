/*
 * Objectif : trouver le nombre secret de l'ordinateur ! On recommence tant qu'on ne l'a pas trouvé
 * Pour aider l'utilisateur il faut lui dire si le nombre saisi est trop grand ou trop petit
 * Sinon ça risque d'être compliqué de deviner...
 * 
 * Bonus : si l'utilisateur trouve en moins de 3 tentatives on le félicite en plus
 */

// Chargement de la fonctionnalité de saisie de l'utilisateur
let prompt = require('prompt-sync')();
// Le nombre saisi par l'utilisateur dans le prompt
let nombreSaisi;

// Le nombre aléatoire secret de l'ordinateur (entre 0 et 19)
let nombreSecret = Math.floor(Math.random() * 20);

// Nombre de tentatives de l'utilisateur (en combien de fois il arrive à trouver le nombre secret)
let compteurTentatives = 1;

// Début d'une boucle infinie
while(true)
{
    // Demande de saisir un nombre.
    nombreSaisi = prompt("Veuillez deviner le nombre : ");

    if(nombreSaisi < nombreSecret)
    {
        console.log("Problème : trop petit !");
    }
    else if(nombreSaisi > nombreSecret)
    {
        console.log("Problème : trop grand !");
    }
    else // if(nombreSaisi == nombreSecret)
    {
        break;
    }

    // Augmentation du nombre de tentatives.
    compteurTentatives++;    
}

console.log("Vous avez réussi 🥳  - il vous a fallu " + compteurTentatives + " tentative(s)");

// ECRIRE ICI LE CODE BONUS
if(compteurTentatives < 3)
{
    console.log('BRAVO ! 🧡');
}