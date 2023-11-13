"use strict";

/*
   les interfaces sont a la jonction entre les types et les classes abstraites.
   a la difference des classes abstraites, l'interface ne contiendra que les declaration, sans aucune definition ou valeur.
   a la diff des types, l'interface sera reservé aux objets et pourra etre redefini (fusionné)

*/

type Chaussette = string;
// je ne peux pas le changer:
// type Chaussette = number;

interface Point 
{
    x: number;
    y: number;
    get(): number;
}
// pas d'erreur, les deux ont fusionnés
interface Point 
{
    z: number;
}
// Je peux tres bien changer une interface deja definie dans vscode
interface Document{chaussette: string};
document.chaussette;

// pour utiliser une interface, je dois utiliser le mot clef "implements"
class Point3D implements Point
{
    x=0;
    y=0;
    z=0;
    get(){ return this.x;} 
}
// Ma fonction attend une interface "point" en argument.
function show(p: Point){};
// Je lui donne une classe "point3D" qui respecte toute les regles de l'interface "point"
show (new Point3D());
