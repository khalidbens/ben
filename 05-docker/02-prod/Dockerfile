#a partir de quel image nous allons construire notre nouvelle image
FROM php:8.2-apache
#copier des fichier presents avec le dockerfile, dans l'image
COPY . /var/www/html
#Run permet de lancer des commandes lors de la construction du conteneur.
#il n'aime pas les sauts a la ligne pour echapper l'erreur il faut mettre "\"
RUN apt update && apt upgrade

# creer une image en faisant docker build -t superphp( nom de l'image ) .




