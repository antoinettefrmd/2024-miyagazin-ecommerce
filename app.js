const express = require("express");
const server = new express();
const port = 8080;
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static('public'));
const bdd = require ('./database/database');


server.get("/", (req,res) => {
        res.render('accueil.ejs');
});

server.post("/", async (req,res) => {
        await bdd.supprimerPanier();
        const mdp_attendu = "gerante"
        const pseudo = req.body.identifiant;
        const mdp = req.body.pswd;
        if(mdp == mdp_attendu) {
                res.redirect('/gerante');
        } else {
                if(await bdd.estclient(pseudo,mdp)) {
                        const cliente = await bdd.retourneIdCliente(pseudo,mdp);
                        res.redirect('/clientele?id=' + cliente[0].id_cliente);
                } else {
                        res.render('mauvais_mdp.ejs'); //à upgrade
                }
        }
});

server.get("/clientele", async (req,res) => {
        try {
                const id_cliente = req.query.id;
                const cliente = await bdd.retourneCliente(id_cliente);
                const gifts = await bdd.retourneCadeaux();
                const panier = await bdd.affichePanier(id_cliente);
                res.render('clientele.ejs', {gifts: gifts, cliente: cliente[0], panier, panier});
        } catch (error) {
                console.error("Error parsing client data:", error);
        }
});

server.post('/clientele', async (req, res) => {
        try {
                const taill = req.body.taille;
                const color = req.body.color;
                var kdo = req.body.id_kdo;
                var id_cliente = req.body.id_cli;
                await bdd.ajoutPanier(id_cliente, kdo, color, taill);
                // console.log("Panier ajouter avec succès:");
                const gifts = await bdd.retourneCadeaux();
                const cliente = await bdd.retourneCliente(id_cliente);
                const panier = await bdd.affichePanier(id_cliente)
                res.render('clientele.ejs', {gifts: gifts, cliente: cliente[0], panier: panier});

        }
        catch(error) {
                console.error("Erreur :", error);
        }
});

server.post('/clientele/valider-panier', async (req, res) => {
        try {
                await bdd.supprimerPanier();
                // console.log("panier supprimer avec succès");
        }
        catch(error) {
                console.error("Erreur :", error);
        }
});

server.get("/gerante", async (req,res) => {
        try {
                const clients = await bdd.retourneClientes();
                const gifts = await bdd.retourneCadeaux(); 
                res.render('gerante.ejs', { clients: clients, gifts: gifts });
        } catch(error) {
                console.error("Erreur :", error);
                res.render('erreur.ejs');
        }
});

// Gestion des clientes

server.get("/gerante/retourneCliente", async (req,res) => { 
        try {    
                const cliente = await bdd.retourneCliente(req.query.idCliente);
                res.json(cliente);
        } catch(error) {
                console.error("Erreur :", error);
                res.render('erreur.ejs');
        }
});


server.post('/gerante/ajoutCliente', async (req, res) => {
        try {
                var nom = req.body.nom;
                var prenom = req.body.prenom;
                var email = req.body.email;
                var anniversaire = req.body.anniversaire;
                var ident = req.body.identifiant;
                var mdp = req.body.mdp;
                var nbp = parseInt(req.body.nbp, 10);
                await bdd.insertCliente(nom,prenom,email,anniversaire,ident,mdp, nbp);
                res.redirect('/gerante');
        }
        catch(error) {
                console.error("Erreur :", error);
                res.render('erreur.ejs');
        }
});

server.post('/gerante/modifCliente', async (req, res) => {
        try {
                var id = parseInt(req.body.id, 10);
                var nom = req.body.nom;
                var prenom = req.body.prenom;
                var email = req.body.email;
                var ident = req.body.identifiant;
                var mdp = req.body.mdp;
                var nbp = parseInt(req.body.nbp,10);
                const cliente = await bdd.retourneCliente(id);
                var anniversaire = cliente[0].anniversaire;
                var nbp_cliente = cliente[0].points;
                if(nbp > nbp_cliente) {
                        nbp_cliente = nbp;
                }
                
                await bdd.suprimmeCliente(id);
                await bdd.insertCliente(nom,prenom,email,anniversaire,ident,mdp, nbp_cliente);

                res.redirect('/gerante');
        }
        catch(error) {
                console.error("Erreur :", error);
                res.render('erreur.ejs');
        }
});

server.post('/gerante/suppCliente', async (req, res) => {
        try {
                var id_cliente = req.body.idCliente;
                await bdd.suprimmeCliente(id_cliente);
                console.log("Cliente supprimée avec succès");
                res.redirect('/gerante');

        }
        catch(error) {
                console.error("Erreur :", error);
                res.render('erreur.ejs');
                res.redirect('/gerante');
        }
});
    
// Gestion des cadeaux

server.get("/gerante/retourneCadeau", async (req,res) => { 
        try {    
                const cadeau = await bdd.retourneCadeau(req.query.idCadeau);
                res.json(cadeau);
        } catch(error) {
                console.error("Erreur :", error);
                res.render('erreur.ejs');
        }
});

server.post('/gerante/ajoutCadeau', async (req, res) => {
        try {
                var titre = req.body.titre;
                var prix = parseInt(req.body.prix,10);
                var stock = req.body.stock;
                var photo = req.body.photo;
                await bdd.insertCadeau(titre,prix,stock,photo);
                res.redirect('/gerante');
        }
        catch(error) {
                console.error("Erreur :", error);
                res.render('erreur.ejs');
        }
});

server.post('/gerante/modifCadeau', async (req, res) => {
        try {
                var id = parseInt(req.body.idCadeau, 10);
                var titre = req.body.titre;
                var prix = parseInt(req.body.prix,10);
                var stock = req.body.stock;
                var photo = req.body.photo;
                
                await bdd.suprimmeCadeau(id);
                await bdd.insertCadeau(titre,prix,stock,photo);

                res.redirect('/gerante');
        }
        catch(error) {
                console.error("Erreur :", error);
                res.render('erreur.ejs');
        }
});

server.post('/gerante/suppCadeau', async (req, res) => {
        try {
                var id_cadeau = req.body.idCadeau;
                await bdd.suprimmeCadeau(id_cadeau);
                console.log("cadeau supprimée avec succès");
                res.redirect('/gerante');
        }
        catch(error) {
                console.error("Erreur :", error);
                res.render('erreur.ejs');
                res.redirect('/gerante');
        }
});



server.use(express.static('public'));
server.set('view engine', 'ejs');
server.listen(port, () => {
        console.log(`server listening at http://localhost:${port}/`)
});