let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

//1 sous-Total
let sousTotal = (prix * quantite).toFixed(2);
console.log(`Sous-total : ${sousTotal}`);

//2 Application de la reduction
let promoCheck = codePromo ?? false;//pour connaitre si codePromo est null ou non
let reduction = 0;
if(promoCheck != false &&  estMembre === true ){//si promoCheck n'est pas false donc elle n'ais pas null
    reduction = (sousTotal * reductionPourcentage) / 100;
    console.log(`Reduction : ${reduction.toFixed(2)}`);
}else {
    console.log(`Reduction : ${reduction.toFixed(2)}`);}

//3 Total final
let Total = sousTotal - reduction;
console.log(`Total : ${Total}`)

//4 Verification
let payCheck;
if (soldeCompte > Total){
    payCheck = "Paimnt aeccepter";
}else {
    payCheck = "Sold insuffisant";
}
console.log(payCheck)

//5 Calcule Nouveau sold
if (payCheck === "Paimnt aeccepter"){
    soldeCompte = soldeCompte - Total;
    console.log(`Sold : ${soldeCompte}`);
}

//6 Recapitulation
console.log("\n=======RÉCAPITULATION=======");
console.log(`Produit : ${nomProduit}`);
console.log(`Quantite : ${quantite}`);
console.log(`Prix unit : ${prix} MAD`);
console.log(`Sous-total : ${sousTotal} MAD`);
console.log(`Réduction : ${reduction} MAS`);
console.log(`Total : ${Total} MAS`);
console.log(`Statu : ${payCheck}`);
console.log(`Sold : ${soldeCompte} MAD`);
console.log("============================\n");
