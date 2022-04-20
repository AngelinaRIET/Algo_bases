// Chargement de la fonctionnalité de saisie de l'utilisateur

//*Créer une fonction pour ajouter des éléments au panier

// *Créer une fonction pour afficher le panier

// créer une fonction pour vider le panier

//***Créer une fonction pour rechercher un article dans le panier 

//*** Créer une fonction pour retirer un élément du panier

// return : premet de renvoyer une valeur depuis une fonction et fait automatiquement sortir de la fonction


let prompt = require('prompt-sync')();

let panier = [];

function ajouterAuPanier(article) 
{
    panier.push(article);
}

function afficherPanier() 
{
    console.log(panier)
}

function viderPanier() 
{
    panier = [];
}

function rechercherPanier(articleRecherché) 
{
    let articleTrouvé = false;
    for (let i = 0; i < panier.length; i++) 
    {
        if (panier[i] == articleRecherché) 
        {
            articleTrouvé = true;
        }
    }
    if (articleTrouvé == true) 
    {
        return true;
    }
    return false;
}

function retirerUnArticle() 
{
    let articleAretirer = prompt("Quel article souhaites-tu retirer?")
    let myIndex = panier.indexOf(articleAretirer);
    if (myIndex !== -1) 
    {
        panier.splice(myIndex, 1);
    }
}

ajouterAuPanier("Mangues");
ajouterAuPanier("Poires");
ajouterAuPanier("Cerises");
afficherPanier();
viderPanier();
afficherPanier();
ajouterAuPanier("pommes");
ajouterAuPanier("fraises");
afficherPanier();
rechercherPanier('pommes');
retirerUnArticle()
afficherPanier();
console.log(rechercherPanier("fraises"));