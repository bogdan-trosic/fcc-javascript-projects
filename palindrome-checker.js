// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
    let regex = new RegExp(/[\W_]/g);
    let reverse = [];

    str = str.replaceAll(regex, "");
    str = str.toLowerCase();

    reverse = str.split("");
    reverse.reverse();
    reverse = reverse.join("");

    if (str === reverse) {
        return true;
    } else return false;
}

palindrome("My age.. is 0-, 0 si ega_ ym.");
