let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

//Name
let Nom = nom.trim();
if (Nom === ""){
    Nom = "Inconnu"
}

//Age
let Age = Number(age);
let agestat;
if (Number.isNaN(Age) || Age <= 0){
    agestat = "Valeur invalide";
}else {
    agestat = "Valeur valide";
}

//Email
let emailstat;
let position = email.indexOf("@");
let dotposition = email.indexOf(".", position);//commence la recherche uniquement après la position @
if (position != -1 && dotposition != -1){
    emailstat = "Valide";
}else {
    emailstat = "Invalide"
}

//ScoreJeu
let newScore = parseInt(scoreJeu);
if (Number.isNaN(newScore)){
    newScore = 0;
}

//Admin
let admin;
if (estAdmin === "false"){
    admin = false;
}else {
    admin = true ;
}

//Connexion
let connexionStat = derniereConnexion ?? "Jamais connecté";

//Nombre de connextion
let connexionNumber = Number(nombreConnexions);
let connexionMessage;
if (connexionNumber === 0 ){
    connexionMessage = "Aucun connexion";
} else {
    connexionMessage = connexionNumber;
}


console.log("\n\n===== RAPPORT UTILISATEUR =====");
console.log(`\nnom              : "${Nom}" (corrigé : espaces supprimés)`);
console.log(`\nage              : ${Age} (${agestat})`);
console.log(`\nemail            : "${email}" (${emailstat})`);
console.log(`\nscoreJeu         : ${newScore} (extrait depuis "${scoreJeu}")`);
console.log(`\nestAdmin         : ${admin}`);
console.log(`\nderniereConnexion: "${connexionStat}" (valeur par défaut via ??)`);
console.log(`\nnombreConnexions : "${connexionMessage}" (${connexionNumber === 0 ? "0 après conversion" : "nombre"})`);
console.log("\n================================\n\n");