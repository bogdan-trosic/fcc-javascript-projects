// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

function uniteUnique(...arr) {
    let mergeArr = [], stashArr = [];

    arr.map(function (elem) {
        return elem.map(function (e) {
            return mergeArr.push(e);
        })
    })

    for (let i = 0; i < mergeArr.length; i++) {
        let test = stashArr.every(function (elem) {
            return elem !== mergeArr[i];
        })

        if (test) {
            stashArr.push(mergeArr[i]);
        }
    }

    console.log(stashArr);

    return stashArr;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
