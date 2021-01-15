// utilisation de FileSystem, bibliothèque existante de gestion de fichier
var fs = require('fs');

var fsPath = require('fs-path');

// méthode qui va lire le fichier salutations.txt et qui va l'afficher en console

var content = fs.readFile('./salutations.txt', function (err, result) {
    if (err)
        return console.error(err);
    return console.log(result.toString());
});
console.log("FIN DU FICHIER ASYNC");

// Ecrire un programme NodeJS qui permet de creer un repertoire monDossier et trois fichiers
// file1.txt, file2.txt et file3.txt qui seront situes dans monDossier
// Utiliser a la fois des fonctions synchrones et des fonctions asynchrones

var file = ["file1.txt", "file2.txt", "file3.txt"]; fs.access('monDossier/', (err) => {
    if (err) {
        console.log("The folder does not exist, Creation de monDossier/");
        for (let i = 0; i < file.length; i++) {
            fsPath.writeFile('monDossier/' + file[i], 'content', function (err) {
                if (err)
                    return console.error(err);
            });
        }
    } else {
        console.log("The folder exists.");
    }
});