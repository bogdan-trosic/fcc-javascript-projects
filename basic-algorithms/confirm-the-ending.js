// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

function confirmEnding(str, target) {
    let strReversed, targetReversed, tempArr, index;

    tempArr = str.split('');
    tempArr.reverse();
    strReversed = tempArr.join('');

    tempArr = target.split('');
    tempArr.reverse();
    targetReversed = tempArr.join('');

    index = strReversed.indexOf(targetReversed);

    if (index === 0) {
        return true;
    } else return false;

}

confirmEnding("Bastian", "n");
