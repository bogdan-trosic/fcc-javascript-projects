// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

function fearNotLetter(str) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let splitArr = str.split("");

    for (let i = 0; i < alphabet.length; i++) {
        if (splitArr[0] === alphabet[i]) {
            for (let j = 1; j < splitArr.length; j++) {
                if (alphabet[j + i] !== splitArr[j]) {
                    return alphabet[j + i];
                }

            }
        }
    }

    return undefined;

}

fearNotLetter("stvwx");
