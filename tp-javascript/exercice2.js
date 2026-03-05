let valeur = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeur.length; i++) {
    if (valeur[i] === ""){
        console.log("chaine vide -> falsy");
    }
    if (valeur[i]){
        console.log(String(valeur[i] + " -> truthy"));
    } else {
        console.log(String(valeur[i] + " -> falsy"));
    }
}
