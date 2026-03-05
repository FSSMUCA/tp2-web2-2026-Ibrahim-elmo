    let pairs = [
        [0 , ""],
        [0 , "0"],
        [0 , false],
        ["" , false],
        [null , undefined],
        [null , false],
        [NaN , NaN],
        [1 , "1"],
        ["\t\n", 0]
    ];

    let counter = 0;

    for (let i = 0 ; i < pairs.length ; i++){
        let A = pairs[i][0];
        let B = pairs[i][1];
        
        let r1 = (A == B);
        let r2 = (A ===B);//Pour faciliter l'ecriture et le print

        console.log(JSON.stringify(A) + " == " + JSON.stringify(B) + " -> " + r1 + " | " + JSON.stringify(A) + " === " + JSON.stringify(B) + " -> " + r2 );//On utilise JSON.stringtify pour printer la valeur exact comme "" au lieu d'in espace vide

        if (r1 != r2){  
            counter++
        }
    }
    console.log("---------------------------------------------------------");
    console.log(counter + " paire(s) où == et === donnent des résultats différents");
