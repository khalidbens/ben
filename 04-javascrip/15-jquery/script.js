"use strict";

/*

    Jquery fut creé par john Resig,
    il est representé par la phrase "faire plus en ecrivant moi" 
    il permet de faire du js plus rapidemement et plus simplement.

    enfin ceci etait vrai a l'epoque car js a bien evolué et gere pas mal de choses  maintenant.
    ici nous allons voir certaines base jquery.
    vous pouvez allez lire la doc.

    jquery peut etre utilisé via cdn, en telechargement le fichier ou bien via npm ( ou autre package manager)

    jquery reste du js, donc toute les fonction js classique fonctionnent.

    seul certains objet rendu par jquery sont specifique a celui ci et donc les methodes classique pourraient ne pas fonctionner.

    $("") sert a la fois pour "querySelectorAll" et pour "createElement".
    $("div") selectionne toute les divs
    $("<div>") creation d'une div
    */

    const btnSlide = $("#slide");
    console.log(btnSlide);
    // addEventListener
    btnSlide.on("click", slideTitle);

    function slideTitle()
    {
        /*
        certain effet classique des animations css, telle que "fade" "slide" ou "hide" sont implementés de base dans jquery.
        cela avec les methodes "slideIn()" et "slideOut()", "slideToggle()" et bien d'autres.
        on pourra donner en argument, une duree pour l'animation, puis optionnement, une fnction a lancer une fois l'animation terminé.
        */
       $("h1").slideToggle(1000 , function()
       {
           console.log("animation terminée");

           /* pour acceder aux propriétés CSS avec jquery, on utilisera la methode ".css()".
           elle prendra 1 seul argument si on veut recuperer la valeur. et deux arguments si on veut la modifier:
           .css("color"), on recupere la couleur.
           .css("color", "red"), on modifie la couleur.
           */
          const color = btnSlide.css("background-color") === "rgb(255, 0, 0)" ? "green" : "red";
          console.log(color);
          btnSlide.css("background-color", color);
       });
    }

    $("#fade").on("click", fadeSpan);

    function fadeSpan()
    {
        /*
        au contraire de js, si il y a plusieurs element selectionees, pas besoin d'utiliser un foreach (boucle), jquery fait ceci pour vous.
        */
        $("h1 span").fadeToggle();
    }

    /*
    avec jquery je peux ajouter plusieurs evenements d'un seul coup:
    */
   $("h1 span").on("mouseenter mouseleave", function(e){
    // En jquery, je n'utiliserais pas "this" mais "$(this)"
    if (e.type === "mouseenter")
    {
        $(this).css("font-size", "4rem");
    }
    else
    {
        $(this).css("font-size", "");
    }
   })

   /*
        $("ducment").ready(function) (ou de nos jours $(function))
        permet d'attendre que le DOM a chargé avant d'executé le script (il peut etre remplacé par defer)
   */

    $(function(){
        $("load").on("click", function(){
            $("ol").hide(200);
            /*
            $.ajax("") est le fetch de jquery.
            on le fera suivre des methodes".done()" et ".fail()" et ".always()"
            qui sont l'quivalent de ".then()", ".catch()" et ".finally()"
            */
           $.ajax("liste.json")
           .done(function(data){
            /*
            jquery comprend directement que les donnes sont en json et les traduit automatiquement en objet js
            */
               console.log(data);
           })
        })
    })
    

 