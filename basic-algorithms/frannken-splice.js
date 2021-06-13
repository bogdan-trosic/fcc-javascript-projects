// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

function frankenSplice(arr1, arr2, n) {
    let arr1Copy = [...arr1];
    let arr2Copy = [...arr2];
    arr1Copy.reverse();


    for (let i = 0; i < arr1.length; i++) {
        arr2Copy.splice(n, 0, arr1Copy[i]);
    }

    return arr2Copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
