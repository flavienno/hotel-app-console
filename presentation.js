const Service = require('./service');
const service = new Service();

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startMenu() {
    const menu = `Veuillez faire un choix ? :
    1. Liste des clients
    2. Ajouter un client
    3. Chercher un client par son nom
    99. Quitter
    `;

    // récupération de la saisie utilisateur 
    rl.question(menu, function (choix) {
        console.log(`Vous avez saisi : ${choix}`);

        if (choix === '99') {
            console.log('Au revoir')
            rl.close();

        } else if (choix === '1') {
            console.log(">>> Liste des Clients");

            service.listerClients().then(listeClient => {
                listeClient.forEach(client => {
                    console.log(`${client.nom} ${client.prenoms}`);
                })
                startMenu();
            }
            ).catch(error => console.log(error));


        } else if (choix === '2') {
            console.log(">>> Vous allez ajouter un client");

            rl.question("Veuillez saisir un nom ", function (nom) {
                rl.question("Veuillez saisir un prénom 3", function (prenom) {

                    service.ajouterClient(nom, prenom).then(
                        reponse => {
                            console.log(reponse);

                        }
                    ).catch(error => {
                        console.log(error.message);
                        startMenu();
                    });
                });
            });
        } else if (choix === '3') {
            console.log(">>> Recherche d'un client par son nom");

            rl.question("Veuillez saisir un nom ", function (nom) {
                service.chercherParNom(nom).then(listeClient => {
                    listeClient.forEach(client => {
                        console.log(`${client.nom} ${client.prenoms}`);
                    })
                }).catch(error => {
                    console.log(error.message);
                    startMenu();
                });
            });

        }

    });
}


exports.startMenu = startMenu;
