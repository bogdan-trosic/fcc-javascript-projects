// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

function truthCheck(collection, pre) {
    let checkArr = [];

    for (let elem of collection) {
        if (elem[pre]) {
            checkArr.push(true);
        } else checkArr.push(false);
    }

    let result = checkArr.every(elem => elem === true);

    console.log(result);
    return result;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");
