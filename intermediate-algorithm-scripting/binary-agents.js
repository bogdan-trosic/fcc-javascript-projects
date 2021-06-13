// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

function binaryAgent(str) {
    let resultStr = "";
    let binaryArr = str.split(" ");

    // 128 64 32 16 8 4 2 1
    // 0 1 0 0 0 0 0 1

    // resultStr = resultStr.concat(String.fromCharCode(65))

    for (let element of binaryArr) {
        let decimalArr = [];

        for (let i = 0; i < 8; i++) {
            let decNum = 0;
            let sequenceNum = 128;

            if (element[i] === "1") {

                for (let j = 0; j < i; j++) {
                    sequenceNum = sequenceNum / 2;
                }

                decNum = sequenceNum;
                decimalArr.push(decNum);
                // console.log(decNum)
                // console.log(element)
            }
        }
        // console.log(decimalArr)
        let finalDec = 0;
        for (let elem of decimalArr) {
            finalDec += elem;
        }
        // console.log(finalDec)
        resultStr = resultStr.concat(String.fromCharCode(finalDec));
    }

    console.log(resultStr);
    return resultStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
