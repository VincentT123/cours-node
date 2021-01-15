// utilisation de FileSystem, bibliothèque existante de gestion de fichier
var fs = require('fs');

var fsPath = require('fs-path');

// méthode qui va lire le fichier salutations.txt et qui va l'afficher en console

var content = fs.readFileSync('./salutations.txt');
console.log(content.toString());
console.log("FIN DU FICHIER SYNC");

// Ecrire un programme NodeJS qui permet de creer un repertoire monDossier et trois fichiers
// file1.txt, file2.txt et file3.txt qui seront situes dans monDossier
// Utiliser a la fois des fonctions synchrones et des fonctions asynchrones

// fs.mkdirSync('monDossier',{ recursive: true });
// fs.openSync('./monDossier/file1.txt', 'a');
// fs.openSync('./monDossier/file2.txt', 'a');
// fs.openSync('./monDossier/file3.txt', 'a');

var file = ["file1.txt", "file2.txt", "file3.txt"];if (fs.existsSync('monDossier')) {
    console.error('dossier existe deja');
}
else {
    fs.mkdirSync('monDossier');
    for (let i = 0; i < file.length; i++) {
        fs.writeFileSync('monDossier/' + file[i], 'contenu fichier');
    }
}
