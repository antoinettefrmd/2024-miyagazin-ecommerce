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

server.post("/", (req,res) => {
        const mdp_attendu = "gerante" //changer avec la base de donée plus tard
        const mdp = req.body.pswd;
        if(mdp == mdp_attendu) {
                res.redirect('/gerante');
        } else {
                //vérifier que la cliente est bien présente dans la base de donnée
                if(1) {
                        res.redirect('/clientele');
                } else {
                        res.render('mauvais_mdp.ejs'); //à upgrade
                }
        }

});

server.get("/clientele", (req,res) => {
        res.render('clientele.ejs');
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
                await bdd.insertCliente(nom,prenom,email,anniversaire,ident,mdp);
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