<?php
require_once __DIR__.'/router.php';

get("/", "./index.php");
// ---------------- Syntaxe ------------------------
get("/variables", "./01-syntaxe/01-variable.php");
get("/conditions", "./01-syntaxe/02-condition.php");
get("/boucles", "./01-syntaxe/03-boucle.php");
get("/fonctions", "./01-syntaxe/04-fonction.php");
get("/include", "./01-syntaxe/05-include.php");
get("/session/a", "./01-syntaxe/06-a-session.php");
get("/session/b", "./01-syntaxe/06-b-session.php");
get("/date", "./01-syntaxe/07-date.php");
get("/header/a", "./01-syntaxe/08-a-header.php");
get("/header/b", "./01-syntaxe/08-b-header.php");

// ----------------- FORM ----------------------
get("/get", "./02-form/01-get.php");
any("/post", "./02-form/02-post.php");
get("/file", "./02-form/03-file.php");
get("/login", "./02-form/04-connexion.php");
get("/logout", "./02-form/05-deconnexion.php");
get("/security", "./02-form/06-security.php");
// ----------------- SERVICE ---------------
get("/captcha", "./ressources/services/_captcha.php");
// ------------------ CRUD ------------------
// liste utilsateur
get("/userlist", function()
{
  require "./03-crud/controler/UserControler.php";
  ListUsers();
});

// Inscription
any("/inscription", function(){
  require "./03-crud/controler/UserControler.php";
  inscription();
});
// suppression
get("/userdelete", function()
{
  require "./03-crud/controler/UserControler.php";
  deleteUser();
});
// mise a jour
any("/userupdate", function()
{
  require "./03-crud/controler/UserControler.php";
  updateUser();
});
// connexion
any("/connexion", function()
{
  require "./03-crud/controler/exeControler.php";
  connexion();
});
// deconnexion
any("/deconnexion", function()
{
  require "./03-crud/controler/exeControler.php";
  deconnexion();
}
);
// ----------------- CRUD Message ----------------------
post("/blog/ajout", function(){
  require "./03-crud/controler/messageController.php";
  createMessage();
});
any('/blog/update/$id', function($id){
  require "./03-crud/controler/messageController.php";
  updateMessage($id);
});
get('/blog/delete/$id', function($id){
  require "./03-crud/controler/messageController.php";
  deleteMessage($id);
});
get('/blog/$id', function($id){
  require "./03-crud/controler/messageController.php";
  readMessages($id);
});
// ----------------- 404 ----------------------
// page 404
any("/404", "./404.php");