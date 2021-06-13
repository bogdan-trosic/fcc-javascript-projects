// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

function dropElements(arr, func) {
    let result, returnArr = [];

    for (let i = 0; i < arr.length; i++) {
        result = func(arr[i]);

        if (result) {
            returnArr = arr.slice(i, arr.length);
            break;
        }
    }

    console.log(returnArr);
    return returnArr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });
