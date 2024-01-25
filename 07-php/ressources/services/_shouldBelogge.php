<?php 
if(session_status()===PHP_SESSION_NONE){
  session_start();
}
/**
 * je verifiie si l'utilisateur est connecté et le redirrige dans le cas contraire
 * 
 *
 * @param boolean $logged true si l'utilisateur doit etre connecté et false si il ne doit pas etre connecté
 * @param string $redirect chemin de redirection
 * @return void
 */
function shouldBelogge(bool $logged = true, string $redirect = "/"): void
{
    if($logged)
    {
      if(isset($_SESSION["expire"]))
      { 
        // si la session a exprirer, on la supprime
        if(time() > $_SESSION["expire"])
        {
          unset($_SESSION);
          session_destroy();
          setcookie("PHPSESSID", "", time()-3600);
        }else
        {
          // Sinon elle est renouvelé pour une heure
          $_SESSION["expire"] = time() + 3600;
        }
      }
      // verification expire
      if(!isset($_SESSION["logged"]) || $_SESSION["logged"]!== true)
      {
        // si l'utilisateur n'est pas connecté, on le redirige
        header("Location: $redirect");
        exit();
      }
    }
    else
    {
      /*
          si l'utilisateur doit etre deconnecté pour acceder a la page,
          alors on verifie si il est connecté,
          si c'est le cas, on le redirige
      */
      if(isset($_SESSION["logged"]) && $_SESSION["logged"]=== true)
      {
        
        header("Location: $redirect");
        exit();
      }
    }
}
