// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

function destroyer(arr1, ...arrgs) {
    let resultArr = [];
    let tempArr = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arrgs.length; j++) {
            if (arr1[i] !== arrgs[j]) {
                tempArr.push(true);
            } else {
                tempArr.push(false);
            }
        }

        if (tempArr.every(elem => elem === true)) {
            resultArr.push(arr1[i]);
        }

        tempArr = [];
    }

    return resultArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
