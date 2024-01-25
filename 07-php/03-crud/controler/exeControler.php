<?php 
require __DIR__ . "/../../ressources/services/_shouldBelogge.php";
// require __DIR__ . "/../model/UserModel.php";
require __DIR__ ."/../model/UserMongoModel.php";

function connexion()
{
    
    shouldBeLogge(false, "/");
    
    $email = $pass = "";
    $error = [];

    if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['connexion']))
    {
        if(empty($_POST["email"]))
            $error["email"] = "Veuillez entrer un email";
        else
            $email = trim($_POST["email"]);

        if(empty($_POST["password"]))
            $error["password"] = "Veuillez entrer un password";
        else
            $pass = trim($_POST["password"]);

        if(empty($error))
        {
            // Je regarde si j'ai un utilisateur qui correspond à l'email :
            $user = getOneUserByEmail($email);
            // Je vérifie si j'ai trouvé un utilisateur :
            if($user)
            {
                /* 
                    La fonction "password_verify()" permet de vérifier si un mot de passe non hashé correspond à un mot de passe hashé. 
                */
                if(password_verify($pass, $user["password"]))
                {
                    /* 
                        Si notre email et notre mot de passe est bon.
                        On arrive ici, et on a plus qu'à sauvegarder les informations que l'on souhaite réutiliser d'une page à l'autre.
                    */
                    $_SESSION["logged"] = true;
                    $_SESSION["username"] = $user["username"];
                    $_SESSION["idUser"] = $user["idUser"];
                    // Et si je souhaite créer une durée limite de connexion
                    $_SESSION["expire"] = time()+3600;
                    // Enfin je redirige mon utilisateur vers une autre page.
                    header("Location:/");
                    exit;
                }
                else
                {
                    $error["login"] = "Email ou Mot de Passe Incorrecte (password)";
                }
            }
            else
            {
                $error["login"] = "Email ou Mot de Passe Incorrecte (email)";
            }
        }
    }

    require __DIR__."/../view/user/connexion.php";
}
function deconnexion()
{
    shouldBeLogge(true, "/");
    
    unset($_SESSION);
    session_destroy();
    setcookie("PHPSESSID", "", time()-3600);
    
    header("Location: /connexion");
    exit;
}


    
?>