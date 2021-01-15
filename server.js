var math = require('lodash');
var mod = require('./mesModules');
var os = require('os');
var http = require('http');
var url = require('url');
var querystring = require('query-string');

// http://localhost:8080
// var server = http.createServer(function(req, res){
//     res.writeHead(200,{"Content-Type" : "text/html"});
//     //res.end('Salut Monde!');
//     res.write('<!DOCTYPE html>'+
//     '<html>'+
//     '   <head>'+
//     '       <meta charset="UTF-8" />'+
//     '       <title>Ma page Node JS</title>'+
//     '   </head>'+
//     '   <body>'+
//     '       <h1>Hello world 2</h1>'+
//     '   </body>'+
//     '</html>'
//     );
// });

// http://localhost:8080/mapage
// page récupère le chemin sur lequel on se trouve dans le navigateur. Si on change à la volée dans le navigateur
// page contiendra noter changement
// var server = http.createServer(function (req, res) {
//     var page = url.parse(req.url).pathname;
//     console.log(page);
//     res.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     res.write('Hello world, this is your requested page : ' + page);
//     res.end();
// });

// http://localhost:8080?prenom=john&nom=wick
// var server = http.createServer(function (req, res) {
//     var params = querystring.parse(url.parse(req.url).
//         query);
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     if ('prenom' in params && 'nom' in params) {
//         res.write('Vous etes ' + params['prenom'] + ' ' +
//             params['nom']);
//     }
//     else {
//         res.write('Vous devez bien avoir un prenom et un nom, non ?');
//     }
//     res.end();
// });

// Ecrire un programme qui affiche le resultat d'une operation
// arithmetique des nombres passes en parametre

// ma soluce ultra bancale pour 2 nombres
// var calcul = function (chemin, a, b) {
//     var resultat = null;
//     switch(chemin){
//         case "/addition/":
//             resultat = parseInt(a) + parseInt(b);
//         break;
//         case "/soustraction/":
//             resultat = parseInt(a) - parseInt(b);
//         break;
//         case "/multiplication/":
//             resultat = parseInt(a) * parseInt(b);
//         break;
//         case "/division/":
//             resultat = parseInt(a) / parseInt(b);
//         break;
//         default:
//             console.log("mauvais chemin");
//     }
//     return resultat;
// }
// var server = http.createServer(function (req, res) {
//     var chemin = url.parse(req.url).pathname;
//     console.log("chemin : " + chemin);
//     var params = querystring.parse(url.parse(req.url).query);
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     if ('nombre1' in params && 'nombre2' in params) {
//         res.write('Le resultat est : ' + calcul(chemin, params['nombre1'], params['nombre2']));
//     }
//     else {
//         res.write('Veuillez entrer deux nombres');
//     }
//     res.end();
// });

// correction de Damien permettant l'opération voulue sur autant de nombre souhaités
function calcul(tab, operator) {
    var result = '';
    for (var i in tab) {
        result = result + operator + tab[i];
    }
    return eval(result.substr(1));
}
var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, { 'Content-type': 'text/plain' });
    var result;
    if (pathname === '/addition') {
        result = calcul(params, '+');
    } else if (pathname === '/soustraction') {
        result = calcul(params, '-');
    } else if (pathname === '/multiplication') {
        result = calcul(params, '*');
    } else if (pathname === '/division') {
        result = calcul(params, '/');
    }
    res.write('Resultat : ' + result);
    res.end();
});

// lance la page
server.listen(8080);

console.log(math.map([1, 5, 3], function (a) {
    return a * 2;
}));

//voir les méthodes utilisables
//console.log(math);

mod.sayHello();

// Utiliser le module os pour afficher :
// L'architecture de votre machine
// Le nombre de CPU
// Le hostname
// Et la charge moyenne

console.log("architecture : " + os.arch());
console.log("nb cpus : " + os.cpus().length);
console.log("hostname : " + os.hostname());
console.log("charge moyenne : " + os.loadavg());
