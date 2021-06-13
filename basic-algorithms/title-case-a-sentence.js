// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

function titleCase(str) {
    let tempArr = [];
    let tempStr = '';

    str = str.toLowerCase();

    tempArr = str.split(' ');
    str = '';

    for (let i = 0; i < tempArr.length; i++) {
        tempStr = tempArr[i][0].toUpperCase();
        str += tempArr[i].replace(tempArr[i][0], tempStr);
        str = str.concat(' ');
    }

    str = str.trimEnd();

    return str;
}

titleCase("sHoRt AnD sToUt");
