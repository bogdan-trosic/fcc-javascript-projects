// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

function addTogether(...num) {
    if (num.length > 2) {
        return console.log("Please enter only two integers");
    }

    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] === "string" || typeof num[i] === "object") {
            return undefined;
        }
    }

    if (num[1] === undefined) {
        return function (n) {
            for (let i = 0; i < n.length; i++) {
                if (typeof n === "string" || typeof n === "object") {
                    return undefined;
                }
            }

            console.log(num[0] + n);
            return num[0] + n;
        }
    }

    console.log(num[0] + num[1]);
    return num[0] + num[1];
}

addTogether(2)([3]);
// addTogether(23, 30)
// addTogether(2)
