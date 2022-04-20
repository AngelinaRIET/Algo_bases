// Créer un programme de tirage au sort de qui va payer un coup à tout le monde demain soir 😏 

// 1- Créer un tableau prenoms avec tous les prénoms de la classe ! Dans la version syntaxe raccourci let prenoms = [ "bla", "bla" etc. ]
// 2- Récupérer un nombre aléatoire dans une variable avec Math.random()
// 3- Créer une variable qui va contenir le numéro de case du tableau du 1.
// 4- Afficher le prénom choisi dans la console, en se basant sur la variable du 3 et le tableau du 1


let prénoms = 
["Anibal", "Anil", "Angélina", "Annette", "April", "Aurore", "Didier", 
"Gauthier", "Hélène", "Irina", "Milton", "Morgane", "Nicolas", "Rachel", "Sean", "Sokona", "Thomas", "Will",];

let prénom =  prénoms[Math.floor(Math.random()* prénoms.length)];


console.log("C'est " + prénom + " qui paie sa tournée !");


