// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

function chunkArrayInGroups(arr, size) {
    let i = 0;
    let slicedArr;
    let resultArr = [];

    while (i < arr.length) {
        slicedArr = arr.slice(i, (i + size));
        resultArr.push(slicedArr);

        i = i + size;
    }

    return resultArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
