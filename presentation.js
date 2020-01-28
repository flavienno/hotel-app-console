
// récupération du module `readline` 
var readline = require('readline');
// création d'un objet `rl` permettant de récupérer la saisie utilisateur 
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startMenu() {
    var menu = `Veuillez faire un choix ? :
    1. Liste des clients
    99. Quitter
    `;

    // récupération de la saisie utilisateur 
    rl.question(menu, function (saisie) {

        if (saisie === '99') {   
            rl.close();
            
        } else if (saisie === '1') {
            console.log('>> Liste des clients');    
        }

    })
}

startMenu();
exports.startMenu = startMenu;
