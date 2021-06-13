// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

    if (arr.length === 0) {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= num) {
            return (num = i);
        } else if (num > arr[arr.length - 1]) {
            return (num = arr.length);
        }
    }

    return num;
}

getIndexToIns([10, 20, 30, 40, 50], 35);
