// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {
    let sourceKeys = Object.keys(source);
    let valueCheckArr = [];
    let result = [];

    let filteredColl = collection.filter(function (elem) {
        let checkValue = [];

        for (let i = 0; i < sourceKeys.length; i++) {
            checkValue.push(elem.hasOwnProperty(sourceKeys[i]));
        }

        if (checkValue.every(function (elem) {
            return elem === true;
        })) return true;

    })

    for (let i = 0; i < filteredColl.length; i++) {
        for (let j = 0; j < sourceKeys.length; j++) {
            valueCheckArr.push(source[sourceKeys[j]] === filteredColl[i][sourceKeys[j]]);
        }

        let valueResult = valueCheckArr.every(function (elem) {
            return elem === true;
        })

        if (valueResult === true) {
            result.push(filteredColl[i]);
        }

        valueCheckArr = [];
    }

    return result;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
