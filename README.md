# ITA-S5-N1
React online Sprint 5. TypeScript &amp; API Curs TypeScript. IT Academy

S5. Acudits
Descripció
Als anteriors lliuraments, les dades que hem utilitzat a les nostres webs els hem agregat nosaltres al programa (hardcoded), però no és habitual.

Com a la majoria de webs reals, consumirem les dades d'una API en aquest exercici. Per sort, no haurem d'implementar una API per a guardar les dades en una base de dades, i poder consumir-los amb una sèrie de crides. En lloc d'això, usarem una API ja feta que ens permetrà obtenir el llistat de naus fàcilment.

Els dos temes més importants que posaràs en pràctica en aquest projecte són TypeScript i obtenció de dades mitjançant anomenades API Rest a un servidor.

Una empresa de coaching està portant un experiment a empreses de Barcelona, en la qual està mesurant l'impacte de l'humor i la diversió a la productivitat.

Ens han demanat una aplicació web que mostri acudits als empleats abans de començar la jornada laboral.

Seràs l'encarregat de dur a terme la base del projecte per a fer una demo en dues setmanes amb el client i començar les proves amb usuaris/es reals.

Informació d'API a consumir
Crearem una web d'acudits, consumint dades d'una API gratuïta que no requereix clau. Veuràs que és molt divertit i interessant poder aconseguir dades d'una API, imagina la quantitat de webs que pots fer!

En l'àmbit professional, quan treballis en un projecte, l'empresa normalment té un back end amb una documentació per a poder obtenir les dades. Sovint, una web o app no només té una font de dades, també és comú utilitzar APIs de tercers. Resumint, saber consumir dades d'una API és una de les skills més importants d'un programador/a front end!

 Important

En qualsevol projecte professional, consumiràs dades d'una API, per la qual cosa has d'entendre bé a fons com realitzar crides API i l'asincronisme de JavaScript.

A continuació es mostren enllaços i informació que poden ser d'utilitat per implementar les crides API a la teva web:

- La documentació de l'API a consumir és la següent:

https://icanhazdadjoke.com/api

- Crida per a obtenir un acudit:

https://icanhazdadjoke.com/

-   Header per a obtenir les dades en el format que ens interessa:

'Accept': 'application/json'

Posem aquest header en l'anomenada API perquè el servidor sàpiga en quin format volem les dades, en el nostre cas en JSON.

Ens hem inventat aquest header? No, ho hem extret de la documentació d'aquesta API-> https://icanhazdadjoke.com/api. 

Les APIs les crearan programadors de back end, deixant sempre documentat tot perquè els programadors de front end o altres programadors back end d'altres empreses puguin consumir les dades.

Simplificant, diguem que l'URL de l'API que introduïm en aquest projecte és on consumirem les dades, i el header és com volem les dades.

Notes
A continuació tens les indicacions del responsable front end:

- És obligatori implementar tots els bucles i lògica amb ES6 (usant map, reduce, filter i sort per a manipular arrays). En cap cas podràs utilitzar el bucle for.

- Encara que és molt recomanable fer servir TypeScript en aquest lliurament, si vas una mica just de temps, pots fer servir JavaScript.

- Si tens dificultats per a crear de zero un projecte TypeScript, aquí tens els passos:
 -> Passos per a preparar un projecte TypeScript

 ....