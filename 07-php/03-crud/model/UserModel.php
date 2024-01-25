<?php
require_once __DIR__ . "/../../ressources/services/_pdo.php"; 

/**
 * récupere tous les utilisateurs
 * 
 *
 * @return array
 */
function getAllUsers(): array
{
  // je me connecte a la BDD
  $pdo = connexionPDO();
  // j'envoi la requete SQL
  $sql = $pdo->query("SELECT * FROM users");
  // je recupere toute les information
  return $sql->fetchAll();
}
/**
 * Undocumented function
 *
 * @param string $email
 * @return array|boolean
 */
function getOneUserByEmail(string $email): mixed
{
  $pdo = connexionPDO();
  // je prepare ma requete afin deviter un injection SQL
  $sql = $pdo->prepare("SELECT * FROM users WHERE email = ?"); // a cette endroit il va avoir quelque chose ( texte...)
  // j'execute ma requete en lui donnant les parametres dans le meme autres que le ?
  
  $sql->execute([$email]);
  // je recupere la premiere information trouvé
  return $sql->fetch();
}
/**
 * recupere un utilisateur par son id
 *
 * @param string $id
 * @return mixed
 */
function getOneUserById(string $id): mixed
{
  $pdo = connexionPDO();
  // plustôt que les "?", on peut utiliser un placeholder pécédé de ":"
  $sql =  $pdo->prepare("SELECT * FROM users WHERE idUser = ?");
  // avec les placeholders, on donne les parametre via un tableau associatif dont les clefs correspondent aux placeholders
  $sql->execute([$id]);
  return $sql->fetch();
}
/**
 * Ajoute un utilsateur en BDD
 *
 * @param string $us nom d'utilisateur
 * @param string $em email
 * @param string $pass mot de passe
 * @return void
 */
function addUser(string $us, string $em, string $pass): void
{
  $pdo = connexionPDO();
  $sql = $pdo->prepare("INSERT INTO users (username, email, password)VALUES(?,?,?)");
  $sql->execute([$us, $em, $pass]);
}
/**
 * Supprime un utilisateur en BDD via son id
 *
 * @param string $id
 * @return void
 */
function deleteUserById(string $id): void // (void retourn rien)
{
  $pdo = connexionPDO();
  $sql = $pdo->prepare("DELETE FROM users WHERE idUser =:id");
  /*
    une autre facon d'indiquer les parametres de la requete, c'est l'utilisation de bindParam ou bindValue.
    dans ce cas on laisse l'execute vide.
    les bind prendrons en premier argument, le placeholder a changer,
    en second la valeur a lui donner,
    et optionnement en troisieme, le type (int, string, etc.)via une constente
    $sql->bindParam("id", $id);
    $sql->bindParam("id", $id, PDO::PARAM_STR);
  */
  $sql->bindParam("id", $id);
  $sql->execute();
}
/**
 * met a jour l'utilisateur
 *
 * @param string $username nom d'utilisateur
 * @param string $email email
 * @param string $password mot de passe
 * @param string $id
 * @return void
 */
function updateUserById(string $username, string $email, string $password, string $id): void
{
  $pdo = connexionPDO();
  $sql = $pdo->prepare("UPDATE users SET username =:us, email = :em, password = :mdp WHERE idUser = :id");
  $sql->execute([
    "id"=> (int)$id,
    "mdp"=> $password,
    "us"=> $username,
    "em"=> $email
  ]);
}
?>