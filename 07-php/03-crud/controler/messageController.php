<?php 

require __DIR__ . "/../../ressources/services/_shouldBelogge.php";
require  __DIR__ . "/../model/UserModel.php";
require  __DIR__ . "/../model/MessageModel.php";

/**
 * gere la page d'affichage des messages
 *
 * @return void
 */
function readMessages($id):void
{

    $id = (int)$id;
    // Si autre chose qu'un nombre est donné  en argument, on redirige ailleurs
    if($id===0)
    {
      header ("Location: /userlist");
      exit();
    }
    $user = getOneUserById($id);
    if(!$user)
    {
      header ("Location: /userlist");
      exit();
    }
    $messages = getMessageByUser($id);

    require __DIR__ . "/../view/messages/listMessage.php";
}  
/**
 * gere la creation d'un message
 *
 * @return void
 */
function createMessage():void
{
    shouldBelogge(true, "/connexion");
    if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['addMessage']))
    {
        if(empty($_POST['message']))
        {
          $_SESSION['flash'] = "Veuillez entrer un message !";
        }
        else
        {
          $message = clean_data($_POST['message']);
          addMessage(['message' => $message, 'idUser' => $_SESSION['idUser']]);
          $_SESSION['flash'] = "Message envoyé !";
        }
    }
    goToListMessage();
}
/**
 * gere la suppression d'un message
 *
 * @param string $id
 * @return void
 */
function deleteMessage(string $id):void
{
    shouldBelogge(true, "/connexion");
    $id = (int)$id;
    if($id===0)
    {
      goToListMessage("id inexistant !");
    }
    $message = getMessageById($id);
    // Si il n'y a pas de message avec cet id ou si l'utilsateur connecté n'est pas l'auteur du message
    if(!$message || $message["idUser"] != $_SESSION['idUser'])
    {
      goToListMessage("Impossible de supprimer !");
    }
    deleteMessageById($id);
    goToListMessage("Message supprimé");
}
/**
 * gere la modification d'un message
 *
 * @param string $id
 * @return void
 */
function updateMessage(string $id):void
{
  shouldBelogge(true, "/connexion");
  $id = (int)$id;
  if($id===0)
  {
    goToListMessage("id inexistant !");
  }
  $message = getMessageById($id);
  // Si il n'y a pas de message avec cet id ou si l'utilsateur connecté n'est pas l'auteur du message
  if(!$message || $message ["idUser"] != $_SESSION["idUser"])
  {
    goToListMessage("Impossible de modifier");
  }

  $error = $m = "";
  if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['editMessage']))
  {
    if(empty($_POST['message']))
    {
      $m = $message['message'];
    }
    else
    {
      $m = clean_data($_POST['message']);
    }
    updateMessageById($id, $m);
    goToListMessage("Message modifié");

  }
  require __DIR__ . "/../view/messages/updateMessage.php";
}

/**
 * Redirige vers la liste des messages de lutilisateur connecté
 * Peut optionnellement prendre un message flash en parametre.
 *
 * @param string|null|null $message
 * @return void
 */
function goToListMessage(mixed $message = null):void
{
  if($message)
  {
    $_SESSION['flash'] = $message;
  }
  header ("Location: /blog/". $_SESSION['idUser']);
  exit;
}
