<?php 
use MongoDB\Driver\Query;
use MongoDB\Driver\BulkWrite;

require_once __DIR__."/../../ressources/services/_mongo.php";
global $mongo, $bulk;
$mongo = connexionMongo();
$bulk = new BulkWrite();

/**
 * recupere tous les utilisateurs
 *
 * @return array
 */
function getAllUsers(): array
{
    $query = new Query([]);
    return queryResult("blog.user", $query, "idUser");
}
/**
 * recupere un utilisateur par son email
 *
 * @param string $email
 * @return mixed
 */
function getOneUserByEmail(string $email): mixed
{
    $query = new Query(["email" => $email]);
    return queryResult("blog.user", $query, "idUser", true);
}
/**
 * recupere un utilisateur par son id
 *
 * @param string $id
 * @return mixed
 */
function getOneUserById(string $id): mixed
{
    $query = new Query(["_id" =>getId($id)]);
    return queryResult("blog.user", $query, "idUser", true);
}
/**
 * Ajoute un utilisateur en bdd
 *
 * @param string $us
 * @param string $em
 * @param string $pass
 * @return void
 */
function addUser(string $us, string $em, string $pass): void
{
    global $mongo, $bulk;  // recupere les variable hors de la fonction
    // on prepare les requetes que l'on souhaite faire
    $bulk->insert (["username"=>$us, "email"=>$em, "password"=>$pass]);
    // puis on les execute
    $mongo->executeBulkWrite("blog.user", $bulk);
}
/**
 * supprime un utilisateur par son id
 *
 * @param string $id
 * @return void
 */
function deleteUserById(string $id): void
{
    global $mongo, $bulk;
    $bulk->delete(["_id" => getId($id)]);
    $mongo->executeBulkWrite("blog.user", $bulk);
}
/**
 * Met a jour un utilisateur par son ID
 *
 * @param string $id
 * @param string $us
 * @param string $em
 * @param string $pass
 * @return void
 */
function updateUserById(string $username, string $email, string $password, string $id): void
{
  global $mongo, $bulk;
  $bulk->update(["_id" => getId($id)], ['$set' => ["username"=>$username, "email"=>$email, "password"=>$password]]);
  $mongo->executeBulkWrite("blog.user", $bulk);
}
?>