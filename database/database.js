function Database() {

    const pg = require('pg');
    const pool = new pg.Pool({
        user: 'levanah',
        host: 'localhost',
        database: 'miyagazin',
        password: 'mdp',
        port: 5432  
    });

    this.insert = async function(nom, prenom, mail, date, ident, mdp) {
        try {
            client = await pool.connect();
            await client.query("INSERT INTO cliente (nom, prenom, mail, anniversaire, identifiant, mdp, points) VALUES ($1, $2, $3, $4, $5, $6, $7)", [nom, prenom, mail, date, ident, mdp, 50]);
            client.release();
        }
        catch(error) {
            console.error("Erreur pendant l'insertion :", error);
            throw new Error("Problème d'insertion");
        }
    }

    this.retourneClientes = async function() { // on pourrait faire une fonction qui fait soit l'un soit l'autre en fonction de son arg
        try {
            const client = await pool.connect();
            const result = await client.query("SELECT nom, prenom FROM cliente");
            const clients = result.rows;
            client.release();
            return clients;
        } catch(error) {
            console.error("Erreur pendant la récupération des clients :", error);
            throw new Error("Problème de récupération des clients");
        }
    }

    this.retourneCadeaux = async function() {
        try {
            const client = await pool.connect();
            const result = await client.query("SELECT * FROM cadeau");
            const cadeaux = result.rows;
            // console.log("kod : ",cadeaux);
            client.release();
            return cadeaux;
        } catch(error) {
            console.error("Erreur pendant la récupération des cadeaux :", error);
            throw new Error("Problème de récupération des cadeaux");
        }
    }

    // this.suprimmeCliente = async function() {
    //     try {
    //     }
    //     catch {

    //     }
    // }

    this.estclient = async function(identifiant, mdp) {
        try{
            const client = await pool.connect();
            const result = await client.query("SELECT * FROM cliente WHERE identifiant = $1 AND mdp = $2", [identifiant, mdp]);
            const res = result.rows;
            client.release();
            return res.length > 0;
        } catch(error) {
            console.error("Erreur pendant la recherche de cliente : ",error);
            throw new Error("Problème récupération cliente dans estclient");
        }
    }

    this.retourneCliente = async function(identifiant, mdp) {
        try{
            const client = await pool.connect();
            const result = await client.query("SELECT nom, prenom, points FROM cliente WHERE identifiant = $1 AND mdp = $2", [identifiant, mdp]);
            const res = result.rows;
            // console.log("res : ",res);
            client.release();
            return res;
        } catch(error) {
            console.error("Erreur pendant la recherche de cliente : ",error);
            throw new Error("Problème récupération cliente dans retourne cliente");
        }
    }
}

module.exports = new Database()