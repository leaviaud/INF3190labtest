/*Author: Johnny Tsheke @ INF2005 -- UQAM
 *Cette petite application node.js sert a demarrer un serveur web local
 *pour tester les fichier static (html, css, js, etc) du cours INF2005 
 *
 */
var express = require('express');
var app=express();
// si ca ne marche pas installer express avec la commade suivante:
// npm install express --save

//remplacer la valeur de htdocs par le chemin du dossier contenant 
//vos fichiers html

//var htdocs= __dirname+'../workspace';//pour chemin absolu ATT au commutateur: 
 var htdocs='../workspace';
console.log(htdocs);
//app.use(express.static(__dirname +'/../workspace'));
app.use(express.static(htdocs));
var portNumber=81;// au besoin changer le numero de port
app.listen(portNumber,function(){console.log(' le serveur fonctionne sur le port: '+portNumber)});

//pour executer taper la commade suivante
//node INF2005.js
//Avec un navigateur visiter le site http://localhost:81
//au besoin remplacer 81 par le numero de port utiliser dans la variable portNumber
