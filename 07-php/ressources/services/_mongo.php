<?php

use MongoDB\BSON\ObjectId;
use MongoDB\Driver\Query;
use MongoDB\Driver\Manager;
/**
 * Récupèere la connexion à mongodb
 *
 * @return Manager
 */
function connexionMongo(): Manager
{
  $config = require __DIR__ . '/../config/_blog_MongoConfig.php';
  // Je construit mon DSN (Data Source Name)
  /*
    celui de mongodb prend la syntaxe suivante : mongodb://nomUser:password@host:port
  */
  $dsn = "mongodb://{$config['user']}:{$config['password']}@{$config['host']}:{$config['port']}";
  try
  {
    $mongo = new Manager($dsn);
    return $mongo;
  }catch(Exception $e)
  {
    echo "Exception recue : {$e->getMessage()}";
  }
}
/**
 * Recupere le resultat d'une requête
 *@
 * @param string $collection
 * @param Query $query
 * @param string $idName
 * @param boolean $one
 * @return array
 */
function queryResult( string $collection, Query $query, string $idName, bool $one = false): array
{
  global $mongo;
  // On execute la requete donné en second argument, sur la collection en premier argument
  $cursor = $mongo->executeQuery($collection, $query);
  // pour obtenir nos resultats sous forme de tableau associatif:
  $cursor->setTypeMap(['root' => 'array']);
  // on retourne le resultat sous forme de tableau:
  $resultat = $cursor->toArray();
  // On change l'objet "objectId" en string:
  $resultat = setId($resultat, $idName);
  // Si le boolean "$one" est a true et que l'on a au moins 1 resultat, je retourne le premier resulat seulement:
  if($one && count($resultat)) return $resultat[0];
  return $resultat;
}
/**
 * Traduit l'objet ID de mongoDB en simple string pour un tableau de resultat
 *
 * @param array $result
 * @param string $idName
 * @return array
 */
function setId(array $result, string $idName): array
{
    for($i=0; $i < count($result); $i++)
    {
        $result[$i][$idName] = (string) $result[$i]["_id"];
    }
    return $result;
}
/**
 * Transforme l'id en objet id
 *
 * @param string $id
 * @return void
 */
function getId (string $id): ObjectId 
{
    return new ObjectId((string)$id);
}
/**
 * filtre le string passé en paramètre.
 *
 * @param string $data
 * @return string
 */
function clean_data(string $data): string
{
    $data = trim($data);
    $data = stripslashes($data);
    return htmlspecialchars($data);
    // return htmlspecialchars(stripslashes(trim($data)));
}

?>