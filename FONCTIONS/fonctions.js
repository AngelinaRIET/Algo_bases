
// chargement de la fonctionnalité de saisie de l'utilisateur
let prompt = require('prompt-sync')();

// déclaration de la fonction
function bonjour(){
    console.log("Bonjour !");
}

// appel de la fonction
bonjour();

//fonction avec arguments
function bonjourQuelqun(nom){
    //Interpolation de chaîne de caractères
    console.log(`Bonjour ${nom} !`);
}

let userName = prompt("Quel est votre prénom ?");
// Appels successifs de la fonction
bonjourQuelqun(userName);
bonjourQuelqun("Anibal");
bonjourQuelqun("Angélina");


function bonjourMultiple(nom, nom2){
    //Interpolation de chaîne de caractères
    //nom et nom2 sont des paramètres de la fonction bonjourMultiple
    console.log(`Bonjour ${nom} et ${nom2} !`);
}
    let name = prompt("Donne moi un premier prénom");
    let name2 = prompt("Donne moi un second prénom");

    bonjourMultiple(name, name2);