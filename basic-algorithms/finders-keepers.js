// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];

        if (func(num) === true) {
            return num;
        }
    }

    return undefined;
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
