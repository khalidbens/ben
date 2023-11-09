<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2etat="inactif" F2defaut="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurPoint="2" epaisseurLigne="2" arrondiAuto="vrai" totalBoucles="5000000" maxBoucle="500000" nbDecimales="8" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="trucs EST_DU_TYPE LISTE" code="1#LISTE#trucs"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="trucs[0] PREND_LA_VALEUR 42" code="5#trucs#42#0"/>
        <item algoitem="trucs[1] PREND_LA_VALEUR 34" code="5#trucs#34#1"/>
        <item algoitem="trucs[2] PREND_LA_VALEUR 13" code="5#trucs#13#2"/>
        <item algoitem="AFFICHER trucs[2]" code="3#trucs#0#2"/>
        <item algoitem="AFFICHER &quot;liste dans une boucle&quot;" code="4#liste dans une boucle#0"/>
        <item algoitem="POUR i ALLANT_DE 0 A 2" code="12#i#0#2">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="" code=""/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
