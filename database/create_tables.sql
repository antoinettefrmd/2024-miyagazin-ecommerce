DROP TABLE IF exists cliente CASCADE;
DROP TABLE IF EXISTS cadeau CASCADE;
DROP TABLE IF EXISTS panier;

CREATE TABLE cliente (
    id_cliente integer primary key, 
    nom varchar(50) not null, 
    prenom varchar(50) not null, 
    anniversaire date not null, 
    identifiant varchar(50) not null, 
    mdp varchar(255) not null, 
    points integer not null
);

CREATE TABLE cadeau (
    id_kdo integer primary key,
    titre varchar(255) not null,
    prix integer not null,
    couleur text,
    taille integer,
    langue varchar(255),
    matiere varchar(30),
    stock integer not null,
    photo varchar(255) not null
);

CREATE TABLE panier (
    id_cliente integer references cliente not null,
    id_kdo integer references cadeau not null
);


----- Remplissage des tables


INSERT INTO cliente VALUES
(1, 'Benoiton', 'Lea', '2003-03-19', 'lolipop', '12345', 1200),
(2, 'Dupont', 'Jean', '1995-07-10', 'jeandupont', 'motdepasse123', 800),
(3, 'Martin', 'Sophie', '1990-12-05', 'sophiemartin', 'mdp456', 1500),
(4, 'Dubois', 'Pierre', '1988-09-25', 'pierredubois', 'mdp789', 2000),
(5, 'Lefevre', 'Marie', '1975-04-12', 'marielefevre', 'mdp321', 300),
(6, 'Moreau', 'Luc', '1980-06-30', 'lucmoreau', 'motdepasse456', 1800);
-- (7, 'Garcia', 'Ana', '1992-11-15', 'anagarcia', 'mdp987', 2200),
-- (8, 'Rodriguez', 'Juan', '1985-02-28', 'juanrodriguez', 'mdp654', 500),
-- (9, 'Martin', 'Claire', '1998-08-17', 'clairemartin', 'mdp123', 1500),
-- (10, 'Bernard', 'Thomas', '1986-05-21', 'thomasbernard', 'pass456', 2300),
-- (11, 'Petit', 'Laura', '1990-01-02', 'laurapetit', '123motdepasse', 800),
-- (12, 'Durand', 'Nicolas', '1983-11-08', 'nicolasdurand', 'mdp789', 2700),
-- (13, 'Leroy', 'Julie', '1995-03-14', 'julieleroi', 'motdepasse789', 1900),
-- (14, 'Morel', 'Paul', '1979-07-30', 'paulmorel', 'mdp246', 1400),
-- (15, 'Fournier', 'Elodie', '1992-09-03', 'elodiefournier', 'mdp159', 2100),
-- (16, 'Girard', 'David', '1980-12-18', 'davidgirard', 'pass789', 1800),
-- (17, 'Roux', 'Caroline', '1988-04-25', 'carolineroux', 'mdp357', 1600),
-- (18, 'Lefort', 'Alexandre', '1997-06-11', 'alexandrelefort', 'pass123', 2000),
-- (19, 'Lefebvre', 'Camille', '1993-02-19', 'camillelefebvre', 'mdp258', 2200),
-- (20, 'André', 'Marine', '1985-10-07', 'marineandre', 'pass258', 2400),
-- (21, 'Mercier', 'Antoine', '1991-08-23', 'antoinemercier', 'mdp456', 1300),
-- (22, 'Dupuis', 'Hélène', '1987-12-29', 'helenedupuis', 'pass357', 2600),
-- (23, 'Lecomte', 'Maxime', '1994-06-15', 'maximelecomte', 'mdp987', 1700),
-- (24, 'Garnier', 'Sarah', '1981-03-09', 'sarahgarnier', 'motdepasse369', 1900),
-- (25, 'Chevalier', 'Kevin', '1999-01-31', 'kevinchevalier', 'mdp654', 1500),
-- (26, 'Boyer', 'Céline', '1996-07-26', 'celineboyer', 'mdp632', 2200),
-- (27, 'Sánchez', 'Luis', '1984-05-03', 'luissanchez', 'pass789', 2800),
-- (28, 'Ortega', 'Elena', '1990-11-19', 'elenaortega', 'mdp789', 1600),
-- (29, 'Hernández', 'Carlos', '1989-09-06', 'carloshernandez', 'mdp147', 2100),
-- (30, 'Gómez', 'Ana', '1997-04-14', 'anagomez', 'pass369', 1800),
-- (31, 'Martínez', 'Javier', '1982-08-27', 'javiermartinez', 'mdp258', 1500),
-- (32, 'Pérez', 'Isabel', '1993-12-01', 'isabelperez', 'mdp123', 2300),
-- (33, 'Santiago', 'Laura', '1986-06-25', 'laurasantiago', 'motdepasse789', 2000),
-- (34, 'Romero', 'Juan', '1978-09-12', 'juanromero', 'mdp456', 1900),
-- (35, 'Alonso', 'María', '1994-02-05', 'mariaalonso', 'mdp987', 1700),
-- (36, 'Torres', 'Miguel', '1981-07-21', 'migueltorres', 'pass369', 2200),
-- (37, 'García', 'Sara', '1990-05-16', 'saragarcia', 'mdp789', 2500),
-- (38, 'Fernández', 'Diego', '1987-11-30', 'diegofernandez', 'mdp369', 2000),
-- (39, 'López', 'Carmen', '1984-04-10', 'carmenlopez', 'pass258', 2400),
-- (40, 'Martín', 'José', '1999-10-22', 'josemartin', 'mdp123', 1800),
-- (41, 'Ruiz', 'Andrea', '1992-08-14', 'andrearuiz', 'mdp789', 2100),
-- (42, 'Gómez', 'Pablo', '1977-03-28', 'pablogomez', 'motdepasse456', 1600),
-- (43, 'González', 'Eva', '1996-01-18', 'evagonzalez', 'mdp258', 1900),
-- (44, 'Herrera', 'Manuel', '1983-09-07', 'manuelherrera', 'pass369', 2300),
-- (45, 'Díaz', 'Marta', '1988-07-02', 'martadiaz', 'mdp987', 2000),
-- (46, 'Moreno', 'Adrián', '1995-04-09', 'adrianmoreno', 'mdp123', 1700),
-- (47, 'Muñoz', 'Ana', '1991-12-20', 'anamunoz', 'pass789', 2500),
-- (48, 'Jiménez', 'Jorge', '1980-06-11', 'jorgejimenez', 'mdp789', 2100),
-- (49, 'Álvarez', 'Lucía', '1989-10-03', 'luciaalvarez', 'mdp369', 1800),
-- (50, 'Vázquez', 'Carlos', '1986-08-16', 'carlosvazquez', 'mdp123', 2200),
-- (51, 'Ramos', 'María', '1993-05-28', 'mariaramos', 'pass789', 1900),
-- (52, 'Román', 'Diego', '1978-02-11', 'diegoroman', 'mdp258', 1600),
-- (53, 'Serrano', 'Paula', '1997-09-24', 'paulaserrano', 'motdepasse456', 2300),
-- (54, 'Iglesias', 'Sergio', '1984-07-07', 'sergioiglesias', 'mdp987', 2000),
-- (55, 'Gutiérrez', 'Laura', '1981-04-03', 'lauragutierrez', 'mdp123', 1700),
-- (56, 'Navarro', 'Elena', '1990-12-18', 'elenanavarro', 'pass789', 2500),
-- (57, 'Marín', 'Javier', '1987-11-05', 'javiermarin', 'mdp789', 2100),
-- (58, 'Montero', 'Carmen', '1994-10-19', 'carmenmontero', 'mdp369', 1800),
-- (59, 'Hidalgo', 'José', '1982-06-30', 'josehidalgo', 'mdp123', 2200),
-- (60, 'Molina', 'Andrea', '1979-03-14', 'andreamolina', 'pass789', 1900);


INSERT INTO cadeau (id_kdo, titre, prix, couleur, taille, langue, matiere, stock, photo)
VALUES
(1, 'Totoro Peluche', 20, 'Gris', NULL, 'Français', 'Peluche', 50, 'totoro_peluche.png'),
(2, 'Château ambulant Puzzle 3D', 30, 'Multicolore', NULL, 'Anglais', 'Carton', 30, 'chateau_ambulant_puzzle.png'),
(3, 'Jiji Tasse', 15, 'Noir', NULL, 'Japonais', 'Céramique', 100, 'jiji_tasse.png'),
(4, 'Princesse Mononoké Figurine', 25, 'Vert', NULL, 'Français', 'Plastique', 40, 'princesse_mononoke_figurine.png'),
(6, 'Tapis volant de Pazu', 40, 'Bleu', NULL, 'Anglais', 'Tissu', 20, 'tapis_volant_pazu.png'),
(7, 'Ponyo Peluche', 18, 'Rouge', NULL, 'Japonais', 'Peluche', 60, 'ponyo_peluche.png'),
(8, 'Kiki la petite sorcière OST Vinyl', 35, NULL, NULL, 'Anglais', 'Vinyle', 25, 'kiki_vinyl.png'),
(9, 'Calcifer Porte-clés', 8, 'Orange', NULL, 'Français', 'Plastique', 120, 'calcifer_porte_cles.png'),
(10, 'Le voyage de Chihiro Blu-ray', 25, NULL, NULL, 'Français', 'Plastique', 70, 'chihiro_blu_ray.png'),
(11, 'Chapeau de Sorcière de Kiki', 15, 'Noir', NULL, 'Français', 'Tissu', 50, 'chapeau_kiki.png'),
(12, 'Totoro Carnet', 10, 'Bleu', NULL, 'Anglais', 'Papier', 90, 'totoro_carnet.png'),
(13, 'Puzzle Princesse Mononoké', 20, 'Vert', NULL, 'Français', 'Carton', 40, 'princesse_mononoke_puzzle.png'),
(14, 'Ponyo Sac à dos', 22, 'Jaune', NULL, 'Japonais', 'Tissu', 55, 'ponyo_sac_a_dos.png'),
(15, 'Pins Totoro', 5, NULL, NULL, 'Anglais', 'Métal', 150, 'totoro_pins.png'),
(16, 'Parapluie Spirited Away', 18, 'Transparent', NULL, 'Français', 'Plastique', 65, 'spirited_away_parapluie.png'),
(17, 'Poupée en bois du château dans le ciel', 28, 'Marron', NULL, 'Anglais', 'Bois', 35, 'chateau_ciel_poupee_bois.png'),
(19, 'Ponyo Mug', 12, 'Rose', NULL, 'Français', 'Céramique', 80, 'ponyo_mug.png'),
(20, 'Laputa Keychain', 6, 'Argent', NULL, 'Anglais', 'Métal', 200, 'laputa_keychain.png');
