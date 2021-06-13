// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

function sumAll(arr) {

    let tempArr = [...arr];

    tempArr.sort(function (a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
    })

    let list = [tempArr[0]];
    let result = 0;

    for (let i = 1; i < (tempArr[1] - tempArr[0]); i++) {
        list.push(tempArr[0] + i);
    }

    list.push(tempArr[1]);

    for (let i = 0; i < list.length; i++) {
        result += list[i];
    }

    return result;

}

sumAll([5, 10]);
