const express = require("express");
const server = new express();
const port = 8080;
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.get("/", (req,res) => {
        res.render('accueil.ejs');
});

server.get("/clientele", (req,res) => {
        res.render('clientele.ejs');
});

server.get("/gerante", (req,res) => {
        res.render('gerante.ejs');
});

server.use(express.static('public'));
server.set('view engine', 'ejs');
server.listen(port, () => {
        console.log(`server listening at http://localhost:${port}/`)
});