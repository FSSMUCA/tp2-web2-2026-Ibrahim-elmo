let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false
console.log("PARTIE A");

let table = { nom: null, age: 0, ville: "", score: undefined, actif: false };//on a cree un discionair pour eviter la repetition et automatiser le programme avec les loops

for (let object in table){
    let result = table[object] ?? "valeur par defaut";
    console.log(`${object} ?? "valeur par defaut" -> ${JSON.stringify(result)}`);//j'ai ajouter JSON.stringtify seulement pour afficher valeur de ville = ""
}

console.log("--------------------------------------------------------\nPARTIE B");

for(let object in table){
    let result = table[object] || "valeur par defaut";
    console.log(`${object} || "valeur par defaut" -> ${result}`);
}

console.log("--------------------------------------------------------\nPARTIE C");

for(let object in table){
    let r1 = table[object] ?? "valeur par defaut"
    let r2 = table[object] || "valeur par defaut"
    if (r1 === r2){
        console.log(`${object} : ?? et || -> même resultat`);
    }else {
        console.log(`${object} : ?? et || -> resultat different`);
    }
}
