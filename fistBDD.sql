-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql
-- Généré le : jeu. 30 nov. 2023 à 10:52
-- Version du serveur : 11.2.2-MariaDB-1:11.2.2+maria~ubu2204
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `fistBDD`
--
CREATE DATABASE IF NOT EXISTS `fistBDD` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `fistBDD`;

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `nom`) VALUES
(1, 'informatique');

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `UserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `message`
--

INSERT INTO `message` (`id`, `content`, `createdAt`, `UserId`) VALUES
(2, 'Bonjour', '2023-11-30 08:39:07', 3),
(3, 'mange du pain', '2023-11-30 08:39:07', 3),
(4, 'Pizza time', '2023-11-30 08:39:07', 3),
(5, 'salade niçoise ou rien', '2023-11-30 08:39:07', 3),
(6, 'Vive les regex', '2023-11-30 08:39:07', 6),
(7, 'JS logic', '2023-11-30 08:39:07', 6),
(8, 'Coucou', '2023-11-30 08:39:07', 6),
(9, 'Bonsoir', '2023-11-30 08:39:07', 9),
(10, 'Je fais la loi !', '2023-11-30 08:39:07', 9),
(11, 'Ne regarde pas derrière toi.', '2023-11-30 08:39:07', 9),
(12, 'Connaissez vous les trois coquillages?', '2023-11-30 08:39:07', 9),
(13, '42', '2023-11-30 08:39:07', 9),
(14, 'salut', '2023-11-30 08:39:07', 5),
(15, 'mangez 5 fruits et légumes par jour', '2023-11-30 08:39:07', 5);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `createdAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `active`, `createdAt`) VALUES
(3, 'Cécilius', 'rome@gmail.com', 'salade', 1, '2023-11-28 10:42:28'),
(4, 'Alcédias', 'alc@gmail.com', 'asdepic', 1, '2023-11-28 10:42:28'),
(5, 'Florestan', 'flo@outlook.fr', 'restant', 0, '2023-11-28 09:50:36'),
(6, 'Elzemond', 'elze@laposte.net', 'banane', 0, '2023-11-28 09:50:36'),
(7, 'Dulmène', 'dudu@outlook.fr', 'banane', 0, '2023-11-28 09:50:36'),
(8, 'Ildéric', 'deric@gmail.com', 'inspecteur', 1, '2023-11-28 10:42:28'),
(9, 'Hypolite', 'polite@gmail.com', 'hippopotame', 1, '2023-11-28 10:42:28'),
(10, 'Guilmée', 'gui@gmail.com', 'guillemet', 1, '2023-11-28 10:42:28');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `fk_userId` (`UserId`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `fk_userId` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
