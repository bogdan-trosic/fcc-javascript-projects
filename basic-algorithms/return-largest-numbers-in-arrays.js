// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

function largestOf(arr) {
    let resultArr = [];
    let largestNum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largestNum) {
                largestNum = arr[i][j];
            }
        }
        resultArr.push(largestNum);
        largestNum = Number.NEGATIVE_INFINITY;

    }

    return resultArr;
}

console.log(largestOf([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
