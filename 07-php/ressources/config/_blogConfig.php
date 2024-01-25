<?php 
return [
  // l'host est l'hebergeur de la BDD
  "host" => $_ENV["DB_HOST"]??"127.0.0.1",
  // le port utilisé pour se connecter
  "port" => $_ENV["DB_PORT"]??"3306",
  // le nom de la BDD
  "database" => $_ENV["DB_NAME"]??"blog",
  // le nom de l'utilisateur pour se connecter
  "user" => $_ENV["DB_USER"]??"root",  
  // le mot de passe de l'utilisateur
  "password" => $_ENV["DB_PASSWORD"]??"root",
  // le set  de caractère à utiliser
  "charset" =>$_ENV["DB_CHARSET"]??"utf8mb4",
  /*
    ce tableau d'option sera utilisé par "PDO" PHP Data Objectservant a la connexion aux BDD
   */
  "options" => 
  [
    // choisir le mode d'affichage d'erreur
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    // choisir le mode de recuperation des données ( ici tableau associatif )
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    // J'indique a PDO de ne pas emuler les requêtes preparees, ce sera ma BDD qui s'en occupera.
    PDO::ATTR_EMULATE_PREPARES => false
  ]
];
?>