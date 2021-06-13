// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

function myReplace(str, before, after) {
    let regex = new RegExp(/^[A-Z]/);
    let test = regex.test(before);

    if (test) {
        let uppCase = after[0].toUpperCase();
        after = after.replace(/^[a-z]/, uppCase);
    } else {
        after = after.toLowerCase();
    }

    str = str.replace(before, after);

    console.log(str);

    return str;
}

myReplace("Let us get back to more Coding", "Coding", "Algorithms");
