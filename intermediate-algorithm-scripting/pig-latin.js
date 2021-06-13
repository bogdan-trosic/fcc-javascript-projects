// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {
    let regex = new RegExp(/^[aeiou]/gi);
    let test = regex.test(str);

    if (test) {
        str = str.concat("way");
    } else {
        regex = new RegExp(/^[bcdfghjklmnpqrstvwxys]+/gi);
        let match = str.match(regex);
        str = str.replace(match, "");
        str = str + match + "ay";
    }

    console.log(str);

    return str;
}

translatePigLatin("cconsonant");
