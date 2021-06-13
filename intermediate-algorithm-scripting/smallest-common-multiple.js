// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

function smallestCommons(arr) {
    arr = arr.sort((a, b) => a === b ? 0 : a > b ? 1 : -1);

    let range = [], testNum = arr[1], result;

    for (let i = arr[0]; i <= arr[1]; i++) {
        range.push(i);
    }

    for (let i = 0; i < testNum; i++) {
        let testResult = range.every(function (elem) {
            if (testNum % elem == 0) {
                return true;
            } else return false;
        })

        if (testResult) {
            result = testNum;
            break;
        }

        testNum = testNum + 1;
    }

    console.log(result);
    return result;
}

smallestCommons([1, 5]);
