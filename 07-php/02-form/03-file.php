<?php 

/*
    nous allons voir comment gerer l'upload de fichier.
    meme si l'enregistrement en BDD attendra.
    il faut noter que l'on n'enregistre pas les fichiers en BDD.
    seul leur nom et leurs chemins d'acces doivent etre enregistré en BDD.
    enregistrer des fichiers seraient trop lourd pour la bdd.
    les fichiers eux sont simplement stocké dans un dossier serveur
*/
$error =$target_file = $target_name = $mime_type = $oldname = "";
$oldname ="";
// Chemin vers le dossier d'upload:
$target_dir = "./uploads/";
// Liste des types mimes acceptés pour les fichiers a uploader:
$type_permis = ["image/png", "image/jpeg", "image/gif", "application/pdf"];
if($_SERVER['REQUEST_METHOD']==='post' && isset($_POST['upload']))
{
    /*
        lorsque l'on upload un fichier, il est placé dans un fdossier
        temporaire supprimé a la fin de l'execution.
        On va donc verifier que le fichier correspond a nos attentes,
        puis le deplacer dans notre dossier upload.

        la premiere etape va etre de verifier que le fichier a bien été upload.
        Pour cela on va utiliser la superglobal $_FILES qui contient tout les fichier uploadé
        c'est un tableau associatif qui prendra en clef, le name de l'input et en valeur type file.
        On ira chercher le "tmp_name" que l'on verifiera avec " is_uploaded_file()".

    */
    if(!is_uploaded_file($_FILES['fichier']['tmp_name']))
    {
        $error = "Veuillez selectionner un fichier";
    }
    else
    {
      /*
          je vais commencer par recuperer le nom de base du fichier.
          grace a basename(), je vais recuperer le nom sans information superflues
      */
      $oldName = basename($_FILES['fichier']['name']);
      /*
          php supprimera un fichier, si un fichier du meme nom est placé dans un dossier.
          pour eviter cela, nous allons renommer notre fichier.
          il existe plein de facon de renommé,
          ici je vais utiliser la fontion "uniqid()"
          elle va generer un string de 13 caracteres aleatoires
          qui se veulent unique a chaque fois.
          elle peut prendre un premier argument qui servira de "prefix"
          et un second argument, qui sera un boolean, a true, ca ne sera plus 13 mais 23 caracteres aleatoires
      */
      $target_name = uniqid(time()."-",true)."-".$oldName;

      // je vais creer le chemin pour mon nouveau fichier:
      $target_file = $target_dir.$target_name;
      /*
          il nous faudra verifier le type du fichier.
          pour cela il ya deux solution:
          soit verifier l'extension du fichier , mais cela est peu securisé.
          soit verifier le type mime du fichier téléversé.
      */
      $mime_type = mime_content_type($_FILES['fichier']['tmp_name']);
      // je verifie si le fichier n'existe pas deja dans mon dossier
      if(file_exists($target_file))
      {
          $error = "Ce fichier existe deja";
      }
      // je verifie la taille maximum de mon fichier.
      if($_FILES['fichier']['size'] > 500000)
      {
          $error = "Ce fichier est trop volumineux";
      }
      /*
          l'upload peut echouer si des fichiers trop lourd sont envoyé 
          et que la configuration serveur ne correspond pas.
          allez voir dans le fichier php.ini

          je verifie si le type mime du fichier est dans ma liste de type accepté.
      */
      if(!in_array($mime_type, $type_permis))
      {
        $error = "Ce type de fichier n'est pas autorise";
      }
      // si il n'y a pas d'erreur:
      if(empty($error))
      {
          /*
              on va utiliser la fonction move_uploaded_file() pour deplacer notre fichier
              depuis sa zone temporaire
              (premiere arguement), jusqua sa zone final ( deuxieme arguement)
              cette fonction retourne un boolean indiquant si le deplacement s'est bien deroulé.
          */
      if(move_uploaded_file($_FILES['fichier']['tmp_name'], $target_file))
      {
          // envoyer le chemin et/ou nom d'origine en bdd
      }
      else
      {
          echo "Une erreur est survenue";
      }
      }
      
    }

}




$title = "";
require __DIR__."/../_header.php";
?>
<!-- Notre formulaire est assez classique, on oublie juste pas l'attribut :
    "enctype" lorsque l'on veut uploader un fichier. -->
    <form action="" method="post" enctype="multipart/form-data">
    <label for="fichier">Choisir un fichier :</label>
    <input type="file" name="fichier" id="fichier">
    <input type="submit" value="Envoyer" name="upload">
    <span class="error"><?php echo $error??""; ?></span>   
</form>
<!-- On affiche cette partie que is on a envoyé notre formulaire et qu'il n'y a aucune erreur. -->
<?php if(isset($_POST["upload"]) && empty($error)): ?>
    <p>
        Votre fichier a bien été téléversé sous le nom  "<?php echo $target_name ?>". <br>
        Vous pouvez le télécharger <br> <a href="<?php echo $target_file ?>" download="<?php echo $oldName ?>"> ICI</a>
    </p>
<?php
endif;
require __DIR__."/../_footer.php";
?>