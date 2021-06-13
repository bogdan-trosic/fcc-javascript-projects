// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

function bouncer(arr) {
    let slicedArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            slicedArr.push(arr[i]);
        }
    }

    return slicedArr;
}

bouncer([null, NaN, 1, 2, undefined]);
