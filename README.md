# Le Miyagazin
## Groupe : 19
### Benoiton Léa : [ID]
### Fourmond Antoinette : [ID]

## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Il faut d'abord se placer dans le dossier "le_miyagazin" avec la commande :

```
        cd le-miyagazin
```

## Configuration des variables d'environnement

1. Installez les dépendances en exécutant `npm install dotenv`.
2. Créez un fichier `.env` à la racine du projet.
3. Ajoutez les variables d'environnement suivantes dans le fichier `.env` :
        DB_USER=nom_utilisateur
        DB_PASSWORD=mot_de_passe


## Compilation et execution

Lancez ensuite psql et tapez les commandes suivantes : 

```
        \i database/create_databse.sql
        \c miyagazin
        \i database/create_tables.sql
        \q
```

Le projet est fin prêt à être lancer ! Tapez finalement la commande suivante puis copiez coller le lien dans votre navigateur préféré : 

```
        node app.js
```

N'oubliez pas de vérifier que vous avez les dépendances requises pour le projet.

Bonne visite !