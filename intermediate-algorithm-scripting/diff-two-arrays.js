// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

function diffArray(arr1, arr2) {
    let resultArr = [];
    let checkValue;

    if (arr1.length >= arr2.length) {
        var tempArr1 = [...arr1];
        var tempArr2 = [...arr2];
    } else {
        var tempArr1 = [...arr2];
        var tempArr2 = [...arr1];
    }

    tempArr1.map(function (elem) {
        checkValue = tempArr2.includes(elem);

        if (checkValue === false) {
            resultArr.push(elem);
        }
    })

    tempArr2.map(function (elem) {
        checkValue = tempArr1.includes(elem);

        if (checkValue === false) {
            resultArr.push(elem);
        }
    })

    return resultArr;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
