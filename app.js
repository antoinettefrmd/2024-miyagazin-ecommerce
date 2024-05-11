const express = require("express");
const server = new express();
const port = 8080;
server.use(express.json());
server.use(express.urlencoded({extended:true}));
const bdd = require ('./database/database');
server.use(express.static('public'));


server.get("/", (req,res) => {
        res.render('accueil.ejs');
});

server.post("/", async (req,res) => {
        const mdp_attendu = "gerante" //changer avec la base de donée plus tard
        const pseudo = req.body.identifiant;
        const mdp = req.body.pswd;
        if(mdp == mdp_attendu) {
                res.redirect('/gerante');
        } else {
                //vérifier que la cliente est bien présente dans la base de donnée
                if(await bdd.estclient(pseudo,mdp)) {
                        const cliente = await bdd.retourneCliente(pseudo,mdp);     
                        const nnom = cliente[0].nom;
                        const prenom = cliente[0].prenom;
                        const ppoints = cliente[0].points; 
                        res.redirect('/clientele?nom=' + nnom + '&points=' + ppoints + '&prenom=' + prenom);
                } else {
                        console.log("non");
                        res.render('mauvais_mdp.ejs'); //à upgrade
                }
        }
});

server.get("/clientele", async (req,res) => {
        const nom = req.query.nom;
        const prenom = req.query.prenom;
        const points = req.query.points;
        const gifts = await bdd.retourneCadeaux(); 
        res.render('clientele.ejs', {gifts: gifts, nom: nom, prenom: prenom, points: points});
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

server.post('/gerante', async (req, res) => {
        try {
                var nom = req.body.nom;
                var prenom = req.body.prenom;
                var email = req.body.email;
                var anniversaire = req.body.anniversaire;
                var ident = req.body.identifiant;
                var mdp = req.body.mdp;
                await bdd.insert(nom,prenom,email,anniversaire,ident,mdp);
                res.redirect('/gerante');
        }
        catch(error) {
                console.error("Erreur :", error);
                res.render('erreur.ejs');
        }
});
    

server.use(express.static('public'));
server.set('view engine', 'ejs');
server.listen(port, () => {
        console.log(`server listening at http://localhost:${port}/`)
});