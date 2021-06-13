// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator 

function telephoneCheck(str) {
    let regex = RegExp(/1?[- ]?(?:\d{3}|\(\d{3}\))[- ]?\d{3}[- ]?\d{4}/);

    let match = str.match(regex);

    if (match !== null && str === match[0]) {
        return true;
    } else return false;
}

telephoneCheck("1 (555) 555 5555");
