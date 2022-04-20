// Création d'une variable, déclaration que c'est une date/heure
let dateDuJour = new Date();

// tableau des jours de la semaine
let lesJours = new Array(); 

lesJours[0] = "Dimanche";
lesJours[1] = "Lundi";
lesJours[2] = "Mardi";
lesJours[3] = "Mercredi";
lesJours[4] = "Jeudi";
lesJours[5] = "Vendredi";
lesJours[6] = "Samedi";


// tableau des mois de l'année
let lesMois = [ "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre" ];
//                 0            1       2       3        4      5       6           7       8               9       10          11

let heures   = dateDuJour.getHours();
let minutes  = dateDuJour.getMinutes();
let secondes = dateDuJour.getSeconds();

// Est-ce que les heures, minutes et secondes sont inférieures à 10 ? Si oui, ajout d'un préfixe zéro devant.
if(heures < 10)
{
    heures = "0" + heures;
}
if(minutes < 10)
{
    minutes = "0" + minutes;
}
if(secondes < 10)
{
    secondes = "0" + secondes;
}


// Exemple : "Aujourd'hui nous sommes le Mercredi 6 Avril 2022, il est 09h02 et 08 secondes."
console.log
(
    "Aujourd'hui nous sommes le " + lesJours[dateDuJour.getDay()] + // affichage du jour de la semaine
    " " + dateDuJour.getDate() +                                    // affichage du jour dans le mois
    " " + lesMois[dateDuJour.getMonth()] +                          // affichage du mois
    " " + dateDuJour.getFullYear() +                                // affichage de l'année
    ", il est " + heures +                                          // affichage de l'heure
    "h" + minutes +                                                 // affichage des minutes
    " et " + secondes +                                             // affichage des secondes
    " secondes."
);


// Affichage d'un message final pour dire au revoir selon l'heure de la journée.
if(heures < 12)
{
    console.log("Bonne matinée !");
}
else if((heures >= 12) && (heures < 13))
{
    console.log("Bon appétit !");
}
else if((heures >= 13) && (heures < 20))
{
    console.log("Bon après-midi !");
}
else // if(heures >= 20)
{
    console.log("Bonsoir !");
}






