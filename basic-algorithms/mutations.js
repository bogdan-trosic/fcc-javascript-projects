// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

function mutation(arr) {
    let result;
    let resultArr = [];

    for (let i = 0; i < arr[1].length; i++) {
        let regex = `(?=${arr[1][i]})`;
        regex = new RegExp(regex, 'i');

        result = regex.test(arr[0]);

        resultArr[i] = result;
    }

    for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i] == true) {
            result = true;
        } else return false;
    }

    return result;
}

mutation(["hello", "hey"]);
