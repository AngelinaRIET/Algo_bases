// Chargement de la fonctionnalité de saisie de l'utilisateur
let prompt = require('prompt-sync')();


// Le choix de l'utilisateur (on lui demande ce qu'il prend)
let humain = prompt("Que choisissez-vous ? (pierre, feuille, ciseau) => ");

// Le choix de l'ordinateur (qui va être aléatoire)
let ordinateur;

// Récupération d'un nombre aléatoire entre 0 et 1
let nombre = Math.random();
//console.log(nombre);

if(nombre <= (1 / 3))   // écriture d'une division pour faire un nombre précis poke Morgane
{
    ordinateur = "pierre";
}
else if(nombre > (1 / 3) && nombre <= (2 / 3))
{
    ordinateur = "feuille";
}
else
{
    ordinateur = "ciseau";
}


console.log(humain);
console.log(ordinateur);

// pierre se fait envelopper par la feuille (la pierre perd face à la feuille)
// feuille se fait découper par le ciseau (la feuille perd face au ciseau)
// ciseau se fait écraser par la pierre (le ciseau perd face à la pierre)

if(humain == ordinateur)
{
    console.log("Résultat : match nul !");
}
else
{
    switch(humain)
    {
        case "pierre":
        if(ordinateur == "feuille")
        {
            console.log("Vous avez perdu ! L'ordinateur enveloppe votre pierre avec sa feuille");
        }
        else // if(ordinateur == "ciseau")
        {
            console.log("Vous avez gagné ! Vous écrasez le ciseau de l'ordinateur");
        }
        break;
    
        case "feuille":
        if(ordinateur == "pierre")
        {
            console.log("Vous avez gagné ! Votre feuille enveloppe la pierre de l'ordinateur");
        }
        else // if(ordinateur == "ciseau")
        {
            console.log("Vous avez perdu ! L'ordinateur découpe votre feuille avec son ciseau");
        }
        break;
    
        case "ciseau":
        if(ordinateur == "feuille")
        {
            console.log("Vous avez gagné ! Votre ciseau découpe la feuille de l'ordinateur");
        }
        else // if(ordinateur == "pierre")
        {
            console.log("Vous avez perdu ! L'ordinateur écrase votre ciseau avec sa pierre");
        }
        break;
    }
}

