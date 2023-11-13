"use strict";
;
document.chaussette;
// pour utiliser une interface, je dois utiliser le mot clef "implements"
class Point3D {
    x = 0;
    y = 0;
    z = 0;
    get() { return this.x; }
}
// Ma fonction attend une interface "point" en argument.
function show(p) { }
;
// Je lui donne une classe "point3D" qui respecte toute les regles de l'interface "point"
show(new Point3D());
