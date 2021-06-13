// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {
    // let missingPairs = ["A", "T", "C", "G"]
    let splitArr = str.split("");
    let newSequence = [];

    for (let i = 0; i < splitArr.length; i++) {
        // for (let j = 0; j < missingPairs.length; j++) {
        //   let regex = new RegExp(missingPairs[j]) 

        //   console.log(regex)
        // }

        if (splitArr[i] === "A") {
            newSequence.push(["A", "T"]);
        } else if (splitArr[i] === "T") {
            newSequence.push(["T", "A"]);
        } else if (splitArr[i] === "C") {
            newSequence.push(["C", "G"]);
        } else {
            newSequence.push(["G", "C"]);
        }

    }

    console.log(newSequence);
    return newSequence;
}

pairElement("ATCGA");
