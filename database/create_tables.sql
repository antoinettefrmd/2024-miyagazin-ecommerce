DROP TABLE IF exists cliente CASCADE;
DROP TABLE IF EXISTS cadeau CASCADE;
DROP TABLE IF EXISTS panier;

CREATE TABLE cliente (
    id_cliente serial primary key, 
    nom varchar(50) not null, 
    prenom varchar(50) not null, 
    mail varchar(255) not null UNIQUE,
    anniversaire date not null, 
    identifiant varchar(50) not null, 
    mdp varchar(255) not null, 
    points integer not null
);

ALTER SEQUENCE cliente_id_cliente_seq RESTART WITH 51;

CREATE TABLE cadeau (
    id_kdo serial primary key,
    titre varchar(255) not null,
    prix integer not null,
    couleur text,
    taille integer,
    stock integer not null,
    photo varchar(255) not null
);

CREATE TABLE panier (
    id_cliente integer references cliente not null,
    id_kdo integer references cadeau not null,
    couleur text,
    taille text
);


----- Remplissage des tables

INSERT INTO cliente VALUES
(1, 'Smith', 'John', 'john.smith@example.com', '1975-05-16', 'j_smith', 'mdp1', 1200),
(2, 'García', 'María', 'maria.garcia@example.com', '1983-05-21', 'mariagarcia', 'password2', 800),
(3, 'Kim', 'Seong', 'seong.kim@example.com', '1990-02-08', 'seong_k', 'senha3', 1500),
(4, 'Müller', 'Lukas', 'lukas.muller@example.com', '1988-09-25', 'lukas_m', 'passwort4', 2000),
(5, 'Chen', 'Wei', 'wei.chen@example.com', '1982-07-12', 'w_chen', 'password5', 300),
(6, 'Nguyen', 'Thi', 'thi.nguyen@example.com', '1979-04-30', 'thi_nguyen', 'motdepasse6', 1800),
(7, 'Sato', 'Takahiro', 'takahiro.sato@example.com', '1993-12-18', 't_sato', 'password7', 1200),
(8, 'Rossi', 'Giulia', 'giulia.rossi@example.com', '1985-03-06', 'giulia_rossi', 'password8', 800),
(9, 'Kowalczyk', 'Adam', 'adam.kowalczyk@example.com', '1972-11-23', 'adam_kowal', 'haslo9', 1500),
(10, 'Singh', 'Priya', 'priya.singh@example.com', '1987-08-09', 'p_singh', 'password10', 2000),
(11, 'Abdullah', 'Mohammed', 'mohammed.abdullah@example.com', '1980-06-15', 'moh_abd', 'password11', 300),
(12, 'Ferreira', 'João', 'joao.ferreira@example.com', '1995-01-27', 'j_ferreira', 'senha12', 1800),
(13, 'Ivanov', 'Dmitri', 'dmitri.ivanov@example.com', '1978-09-03', 'd_ivanov', 'mdp13', 1200),
(14, 'González', 'Carlos', 'carlos.gonzalez@example.com', '1984-04-17', 'carlos_g', 'password14', 800),
(15, 'Lee', 'Soo-min', 'soomin.lee@example.com', '1991-10-04', 'soo_min', 'password15', 1500),
(16, 'Andersson', 'Emma', 'emma.andersson@example.com', '1986-12-12', 'emma_a', 'lösenord16', 2000),
(17, 'Martínez', 'Ana', 'ana.martinez@example.com', '1973-07-28', 'ana_m', 'password17', 300),
(18, 'Wang', 'Wei', 'wei.wang@example.com', '1981-02-19', 'w_wei', 'password18', 1800),
(19, 'Dubois', 'Antoine', 'antoine.dubois@example.com', '1996-05-09', 'antoine_d', 'motdepasse19', 1200),
(20, 'Kovács', 'Gábor', 'gabor.kovacs@example.com', '1976-08-24', 'g_kovacs', 'jelszó20', 800),
(21, 'Kabila', 'Joseph', 'joseph.kabila@example.com', '1971-06-04', 'kabila_j', 'motdepasse21', 1200),
(22, 'Mugabe', 'Grace', 'grace.mugabe@example.com', '1965-07-23', 'g_mugabe', 'password22', 800),
(23, 'Kenya', 'Nelson', 'nelson.kenya@example.com', '1980-04-12', 'n_kenya', 'senha23', 1500),
(24, 'Diop', 'Aminata', 'aminata.diop@example.com', '1978-09-25', 'a_diop', 'passwort24', 2000),
(25, 'Mohamed', 'Fatima', 'fatima.mohamed@example.com', '1982-03-18', 'f_mohamed', 'password25', 300),
(26, 'Abdullahi', 'Hassan', 'hassan.abdullahi@example.com', '1977-11-30', 'h_abdullahi', 'motdepasse26', 1800),
(27, 'Ouedraogo', 'Adama', 'adama.ouedraogo@example.com', '1993-12-18', 'adama_o', 'password27', 1200),
(28, 'Macharia', 'Wanjiru', 'wanjiru.macharia@example.com', '1985-03-06', 'w_macharia', 'password28', 800),
(29, 'Keita', 'Sekou', 'sekou.keita@example.com', '1972-11-23', 's_keita', 'haslo29', 1500),
(30, 'Toure', 'Aissatou', 'aissatou.toure@example.com', '1987-08-09', 'a_toure', 'password30', 2000),
(31, 'Kwame', 'Akosua', 'akosua.kwame@example.com', '1980-06-15', 'akosua_k', 'password31', 300),
(32, 'Tshabalala', 'Sipho', 'sipho.tshabalala@example.com', '1995-01-27', 's_tshabalala', 'senha32', 1800),
(33, 'Sow', 'Dieneba', 'dieneba.sow@example.com', '1978-09-03', 'd_sow', 'napon33', 1200),
(34, 'Kane', 'Moussa', 'moussa.kane@example.com', '1984-04-17', 'm_kane', 'password34', 800),
(35, 'Nkosi', 'Nomalanga', 'nomalanga.nkosi@example.com', '1991-10-04', 'n_nkosi', 'password35', 1500),
(36, 'Nyongo', 'Lupita', 'lupita.nyongo@example.com', '1986-12-12', 'l_nyongo', 'lösenord36', 2000),
(37, 'Mahama', 'Ama', 'ama.mahama@example.com', '1973-07-28', 'ama_mahama', 'password37', 300),
(38, 'Bakari', 'Fatoumata', 'fatoumata.bakari@example.com', '1981-02-19', 'f_bakari', 'password38', 1800),
(39, 'Koné', 'Abdoul', 'abdoul.kone@example.com', '1996-05-09', 'a_kone', 'motdepasse39', 1200),
(40, 'Sangare', 'Djeneba', 'djeneba.sangare@example.com', '1976-08-24', 'd_sangare', 'jelszó40', 800),
(41, 'Smith', 'Emily', 'emily.smith@example.com', '1983-11-18', 'emily_smith', 'password41', 1200),
(42, 'Johnson', 'Michael', 'michael.johnson@example.com', '1979-06-27', 'm_johnson', 'motdepasse42', 800),
(43, 'Sánchez', 'Juan', 'juan.sanchez@example.com', '1988-09-15', 'juan_sanchez', 'senha43', 1500),
(44, 'Martinez', 'Anaa', 'ana2.martinez@example.com', '1976-04-03', 'a_martinez', 'password44', 2000),
(45, 'Mueller', 'Sarah', 'sarah.mueller@example.com', '1982-01-20', 's_mueller', 'password45', 300),
(46, 'García', 'Carlos', 'carlos.garcia@example.com', '1977-12-08', 'c_garcia', 'passwort46', 1800),
(47, 'Kim', 'Ji-hyun', 'ji-hyun.kim@example.com', '1991-05-13', 'ji_hyun_kim', 'password47', 1200),
(48, 'Chen', 'Yong', 'yong.chen@example.com', '1985-08-30', 'y_chen', 'password48', 800),
(49, 'Sato', 'Yui', 'yui.sato@example.com', '1973-03-09', 'y_sato', 'senha49', 1500),
(50, 'Brown', 'Emma', 'emma.brown@example.com', '1989-02-17', 'emma_brown', 'password50', 2000);


INSERT INTO cadeau (id_kdo, titre, prix, stock, photo)
VALUES
(1, 'Totoro Peluche', 20, 1, 'totoro_peluche.png'),
(2, 'Château ambulant Puzzle 3D', 30, 30, 'chateau_ambulant_puzzle.png'),
(3, 'Jiji Tasse', 15, 100, 'jiji_tasse.png'),
(4, 'Princesse Mononoké Figurine', 25, 40, 'princesse_mononoke_figurine.png'),
(6, 'Tapis volant de Pazu', 40, 20, 'tapis_volant_pazu.png'),
(7, 'Ponyo Peluche', 18, 60, 'ponyo_peluche.png'),
(8, 'Kiki la petite sorcière OST Vinyl', 35, 25, 'kiki_vinyl.png'),
(9, 'Calcifer Porte-clés', 8, 120, 'calcifer_porte_cles.png'),
(10, 'Le voyage de Chihiro Blu-ray', 25, 70, 'chihiro_blu_ray.png'),
(11, 'Chapeau de Sorcière de Kiki', 15, 50, 'chapeau_kiki.png'),
(12, 'Totoro Carnet', 10, 90, 'totoro_carnet.png'),
(13, 'Puzzle Princesse Mononoké', 20, 40, 'princesse_mononoke_puzzle.png'),
(14, 'Ponyo Sac à dos', 22, 55, 'ponyo_sac_a_dos.png'),
(15, 'Pins Totoro', 5, 150, 'totoro_pins.png'),
(16, 'Parapluie Spirited Away', 18, 65, 'spirited_away_parapluie.png'),
(17, 'Poupée en bois du château dans le ciel', 28, 35, 'chateau_ciel_poupee_bois.png'),
(19, 'Ponyo Mug', 12, 80, 'ponyo_mug.png'),
(20, 'Laputa Keychain', 6, 200, 'laputa_keychain.png');