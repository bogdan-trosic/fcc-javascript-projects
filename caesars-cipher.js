// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

function rot13(str) {
    let checkArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let changeArr = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

    let strArr = str.split("");
    let result = "";

    for (let elem in strArr) {
        for (let i = 0; i < checkArr.length; i++) {
            if (strArr[elem] == checkArr[i]) {
                result = result + changeArr[i];
            }
        }

        if (/\W/.test(strArr[elem])) {
            result = result + strArr[elem];
        }
    }

    console.log(result);
    return result;
}

rot13("SERR PBQR PNZC");
