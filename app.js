const express = require("express");
const server = new express();
const port = 8080;
server.use(express.json());
server.use(express.urlencoded({extended:true}));
const bdd = require ('./database/database');


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
        // res.render('gerante.ejs');
        try {
                const clients = await bdd.afficherClients();
                res.render('gerante.ejs', { clients: clients });
        } catch(error) {
                console.error("Erreur pendant l'affichage des clients :", error);
                res.render('erreur.ejs'); // gérer l'affichage en cas d'erreur
        }
});
    

server.use(express.static('public'));
server.set('view engine', 'ejs');
server.listen(port, () => {
        console.log(`server listening at http://localhost:${port}/`)
});