/*Author: Johnny Tsheke @ INF2005 -- UQAM
 *Cette petite application node.js sert a demarrer un serveur web local
 *pour tester les fichiers web statiques (html, css, js, etc) du cours INF2005 
 *
 */
var express = require('express');
var app=express();
// si ca ne marche pas installez express avec la commade suivante:
// npm install express --save

//remplacez la valeur de htdocs par le chemin du dossier contenant 
//vos fichiers html

app.get('/',function(reg,res){
res.redirect('/fr');
});
app.post('/form',function(req,res){
	res.send("Formulaire");
	console.log("lo")
});
app.post('/login',function(req,res){
	res.send("login");
	console.log("lo")
});
//var htdocs= __dirname+'../workspace';//pour chemin absolu ATT au commutateur: 
var htdocs = '../workspace';//editez selon vos dossiers
  var htdocs='../workspace/S21/demo-app/dist/demo-app';
console.log(htdocs);
//app.use(express.static(__dirname +'/../workspace'));
app.use(express.static(htdocs));
var portNumber=3000;// au besoin changez le numero de port
//portNumber=50007
app.listen(portNumber,function(){console.log(' le serveur fonctionne sur le port: '+portNumber)});
console.log('serveur demarré avec success');
//pour executer, tapez la commade suivante:
//node INF2005.js
//Avec un navigateur web, visitez le site http://localhost:3000
//Au besoin remplacez 81 par le numero de port utilisé dans la variable portNumber
