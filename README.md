
https://gitlab.com/INF3190/INF2005NODEJS.git

Projet node.js pour demarrer un serveur web local et tester les fichiers web statiques du cours INF2005.

Cette application nécessite l'installation de node.js (https://nodejs.org). Prendre la version LT. Vous pourriez aussi avoir besoin de express (http://expressjs.com/)

Si node.js est déjà installé sur la machine, télécharger ce projet (INF2005NODEJS) puis vous le décompressez. À l'aide d'un terminal, entrez dans le dossier  du projet puis tapez la commande suivante pour installer express si vous avez une connexion Ineternet:

npm install express --save



Par défaut, ce dossier est supposé se placer au même niveau que le dossier (ex: workspace) contenatent vos projets web

Vous pouvez éditer la variable htdocs du fichier INF2005.js pour l'initialiser au chemin du dossier contenant vos fichier web (html, css, js, etc). Dans ce cas, ce dossier deviendra la racice de votre site Internet.

Pour démarer le serveur, tapez la commande suivante:

node INF2005.js

Si tout se passe bien, l'application indiquera le port sur lequel il écoute (ex: 3000)

Par la suite, avec un navigateur, vous pourriez visiter vos pages en allant sur:

http://localhost:3000

Rappelons qu'habituellement, un serveur web écoute sur le port 80 par défaut

# Tester le site Internet Angular multilingue

Pour tester un site Internet angular (multilingue([https://angular.io/guide/i18n]):

- Déployer le site avec la location (ex: application s'appelle `demo-app`). 

~~~csh
ng build --prod --localize
~~~

- Éditer le fichier `INF2005.js` pour affecter à la variale `htdocs`  le chemin  du dossier `demo-app/dist/demo-app` qui content le déploiement des sites multilingues. Attention: Ce dossier doit-être la racine des sites des différentes langues.

- Au besoin, éditer la route suivante pour définir le site de la langue par défaut.

~~~csh
app.get('/',function(reg,res){
res.redirect('/fr');
});
~~~

- Démarrer l'application

~~~csh
node INF2005.js
~~~
