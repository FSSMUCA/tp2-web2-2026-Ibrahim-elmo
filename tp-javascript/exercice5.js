 let table = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < table.length; i++) {

    let value = table[i];

    if (Number.isNaN(value)) {
        console.log(`${value} -> INVALIDE`);

    } else if (value === Infinity || value === -Infinity) {
        console.log(`${value} -> INFINI`);

    } else if (1 / value === -Infinity) {
        console.log(`${value} -> ZERO NEGATIF`);

    } else if (Number.isInteger(value)) {
        if (value <= Number.MAX_SAFE_INTEGER && value >= Number.MIN_SAFE_INTEGER) {
            console.log(`${value} -> ENTIER SUR`);
        } else {
            console.log(`${value} -> ENTIER HORS LIMITES`);
        }

    } else {
        console.log(`${value} -> DECIMAL`);
    }
}
