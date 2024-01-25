<?php 
// Model est utilisé pour les requetes sql
require_once __DIR__ . '/../../ressources/services/_pdo.php';

function getMessageByUser(int $idUser): mixed
{
    $pdo = connexionPdo();
    $sql = $pdo->prepare( "SELECT * FROM messages WHERE idUser = ?");
    $sql->execute([$idUser]);
    return $sql->fetchAll();

}
/**
 * retourne un message via id
 *
 * @param integer $id
 * @return array|false
 */
/** */
function getMessageById(int $id):mixed
{
    $pdo = connexionPDO();
    $sql = $pdo->prepare( "SELECT * FROM messages WHERE idMessage = ?");
    $sql->execute([$id]);
    return $sql->fetch();
}
/**
 * nouveau message en bdd
 *
 * @param array $values
 * $values = ["message" => (string), "idUser" => (int)]
 * @return void
 */
function addMessage(array $values):void
{
    $pdo = connexionPDO();
    $sql = $pdo->prepare( "INSERT INTO messages (message, idUser) VALUES (:message, :idUser)");
    $sql->execute($values);

}
/**
 * supprime un message
 *
 * @param integer $id
 * @return void
 */
function deleteMessageById(int $id):void
{
    $pdo = connexionPDO();
    $sql = $pdo->prepare( "DELETE FROM messages WHERE idMessage = ?");
    $sql->execute([$id]);
}
/**
 * modifie un message via son id
 *
 * @param integer $idMessage
 * @return mixed
 */
function updateMessageById(int $idMessage , string $content):mixed
{
    $pdo = connexionPDO();
    $sql = $pdo->prepare( "UPDATE messages SET message =:m, editedAT = current_timestamp() WHERE idMessage = :id");
    $sql->execute(['m' => $idMessage, 'id' => $content]);
}
