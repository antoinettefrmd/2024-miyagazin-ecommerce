$(document).ready (function () {

    function afficherClients() {
        var clients = retourneClient();
    
        var clientsContainer = document.getElementById('clientsContainer');
        clientsContainer.innerHTML = '<h2>Clients</h2>';
        clients.forEach(function(client) {
            clientsContainer.innerHTML += '<p>' + client.nom + ' ' + client.prenom + '</p>';
        });
    }
});