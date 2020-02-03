const requestPromise = require('request-promise-native');

class Service{
constructor(){};


  listerClients() {
    return requestPromise('https://fla-hotel-web-api.herokuapp.com/clients', { json: true })
    

  }

  ajouterClient (nom, prenom) {
    return requestPromise.post('https://fla-hotel-web-api.herokuapp.com/clients', { json: { "nom": nom, "prenoms": prenom } });
  }

  chercherParNom ( nom) {
    return requestPromise('https://fla-hotel-web-api-app.herokuapp.com/clients?nom=${nom}', { json: true })
        
  }
}

module.exports = Service;
