var service = require('./service');
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
    rl.question(menu, function (choix) {
        console.log(`Vous avez saisi : ${choix}`);

        if (choix === '99') {
            console.log('Au revoir')
            rl.close();

        } else if (choix === '1') {
            service.listerClients(function (erreur) {
                console.log("Erreur")
            },
                (function (data) {
                    console.log('>> Liste des clients');
                    //ici on a eu la réponse les données st ds data
                    data.forEach(element => {
                        console.log(element.nom, " ", element.prenoms)
                    });
                    startMenu();
                }));
        }

    });
}

startMenu();
exports.startMenu = startMenu;
