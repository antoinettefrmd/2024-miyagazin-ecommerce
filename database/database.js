function Database() {

    const pg = require('pg');
    const pool = new pg.Pool({
        user: 'antoinettefrmd',
        host: 'localhost',
        database: 'miyagazin',
        password: 'mdp',
        port: 5432  
    });

    // Gestion des clientes

    this.insertCliente = async function(nom, prenom, mail, date, ident, mdp, nbp) {
        try {
            client = await pool.connect();
            await client.query("INSERT INTO cliente (nom, prenom, mail, anniversaire, identifiant, mdp, points) VALUES ($1, $2, $3, $4, $5, $6, $7)", [nom, prenom, mail, date, ident, mdp, nbp]);
            client.release();
        }
        catch(error) {
            console.error("Erreur pendant l'insertion :", error);
            throw new Error("Problème d'insertion");
        }
    }
    
    this.retourneCliente = async function(id) { 
        try {
            const client = await pool.connect();
            const result = await client.query("SELECT * FROM cliente WHERE id_cliente = $1", [id]);
            const clients = result.rows;
            client.release();
            return clients;
        } catch(error) {
            console.error("Erreur pendant la récupération des clients :", error);
            throw new Error("Problème de récupération des clients");
        }
    }

    this.retourneClientes = async function() { 
        try {
            const client = await pool.connect();
            const result = await client.query("SELECT * FROM cliente");
            const clients = result.rows;
            client.release();
            return clients;
        } catch(error) {
            console.error("Erreur pendant la récupération des clients :", error);
            throw new Error("Problème de récupération des clients");
        }
    }

    this.suprimmeCliente = async function(id) {
        try {
            const client = await pool.connect();
            await client.query("DELETE FROM cliente WHERE id_cliente = $1", [id]);
            client.release();
        }
        catch (error) {
            console.error("Erreur pendant la supression de la cliente :", error);
            throw new Error("Problème de supression de cliente");
        }
    }
  
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

    this.retourneCliente = async function(id) {
        try{
            const client = await pool.connect();
            const result = await client.query("SELECT * FROM cliente WHERE id_cliente = $1", [id]);
            const res = result.rows;
            client.release();
            return res;
        } catch(error) {
            console.error("Erreur pendant la recherche de cliente : ",error);
            throw new Error("Problème récupération cliente dans retourne cliente");
        }
    }

    this.retourneIdCliente = async function(identifiant, mdp) {
        try{
            const client = await pool.connect();
            const result = await client.query("SELECT id_cliente FROM cliente WHERE identifiant = $1 AND mdp = $2", [identifiant, mdp]);
            const res = result.rows;
            client.release();
            return res;
        } catch(error) {
            console.error("Erreur pendant la recherche de cliente : ",error);
            throw new Error("Problème récupération cliente dans retourne cliente");
        }
    }

    // Gestion des Cadeaux
    

    this.insertCadeau = async function(titre, prix, stock, photo) {
        try {
            client = await pool.connect();
            await client.query("INSERT INTO cadeau (titre, prix, stock, photo) VALUES ($1, $2, $3, $4)", [titre, prix, stock, photo]);
            client.release();
        }
        catch(error) {
            console.error("Erreur pendant l'insertion :", error);
            throw new Error("Problème d'insertion");
        }
    }
    
    this.retourneCadeau = async function(id) { 
        try {
            const client = await pool.connect();
            const result = await client.query("SELECT * FROM cadeau WHERE id_kdo = $1", [id]);
            const cadeau = result.rows;
            client.release();
            return cadeau;

        } catch(error) {
            console.error("Erreur pendant la récupération des cadeaux :", error);
            throw new Error("Problème de récupération des cadeaux");
        }
    }

    this.retourneCadeaux = async function() { // on pourrait faire une fonction qui fait soit l'un soit l'autre en fonction de son arg
        try {
            const client = await pool.connect();
            const result = await client.query("SELECT * FROM cadeau");
            const cadeaux = result.rows;
            client.release();
            return cadeaux;
        } catch(error) {
            console.error("Erreur pendant la récupération des cadeaux :", error);
            throw new Error("Problème de récupération des cadeaux");
        }
    }

    this.suprimmeCadeau = async function(id) {
        try {
            const client = await pool.connect();
            await client.query("DELETE FROM cadeau WHERE id_kdo = $1", [id]);
            client.release();
        }
        catch (error) {
            console.error("Erreur pendant la supression du cadeau :", error);
            throw new Error("Problème de supression du cadeau");
        }
    }
    
    // Gestion du Panier

    this.ajoutPanier = async function(id_cliente, id_kdo, couleur, taille) {
        try {
            client = await pool.connect();
            await client.query("INSERT INTO panier (id_cliente, id_kdo, couleur, taille) VALUES ($1, $2, $3, $4)", [id_cliente, id_kdo, couleur, taille]);
            client.release();
        }
        catch(error) {
            console.error("Erreur pendant l'insertion au panier :", error);
            throw new Error("Problème d'insertion");
        }
    }

    this.affichePanier = async function(id) {
        try{
            const client = await pool.connect();
            const result = await client.query("SELECT titre, prix, taille, couleur FROM panier JOIN cadeau ON panier.id_kdo = cadeau.id_kdo WHERE id_cliente = $1", [id]);
            const res = result.rows;
            client.release();
            return res;
        } catch(error) {
            console.error("Erreur pendant la recherche de panier : ",error);
            throw new Error("Problème récupération panier");
        }
    }

    this.supprimerPanier = async function() {
        try{
            const client = await pool.connect();
            const result = await client.query("TRUNCATE TABLE panier");
            client.release();
        } catch(error) {
            console.error("Erreur pendant la suppression du panier : ",error);
            throw new Error("Problème supression panier");
        }
    }
}

module.exports = new Database()