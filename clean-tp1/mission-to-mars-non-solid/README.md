# mission-to-mars-non-solid

Mission vers mars 2021, rover et hélicoptère (version non SOLID)

2 modules sont posés sur Mars :
- par rapport à une position 3D (origine en bas, à gauche) ;
- possédant une direction (nord, sud, est, ouest).

Ils peuvent avancer et reculer d'une case, suivant la position qu'il possède :
- le rover est un module qui roule ;
- l'hélicoptère est un module qui vole, et peut donc également monter et descendre d'une case, peu importe sa direction ;

Une sonde, tournant autour de Mars, peut demander à chaque module de se mettre en position de récupération :
- dans le cas de l'hélicoptère, celui-ci se pose alors au sol ;
- activation d'un booléen "pretPourRecuperation" pour les deux modules.

Ce programme a été écrit en TDD et possède donc une couverture à 100%.
Cependant, 3 principes SOLID ne sont pas respectés.

L'exercice est :
- de rendre le programme SOLID ;
- d'ajouter la direction "nord ouest", et faire avancer/reculer les deux modules suivant cette direction.
