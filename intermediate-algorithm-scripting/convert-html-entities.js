// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

function convertHTML(str) {
    let chars = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
    let regs = [/&/g, /</g, />/g, /"/g, /'/g];

    for (let i = 0; i < chars.length; i++) {
        str = str.replaceAll(regs[i], chars[i]);
    }

    console.log(str);

    return str;
}

convertHTML("Hamburgers & Pizza < Tacos");

// let toEscapePairs = ["&", "&amp;", "<", "&lt;", ">", "&gt;", "\"", "&quot;", "\'", "&apos;"]

// if (/&/.test(str)) {
//   str = str.replaceAll(/&/g, "&amp;")
//   console.log(str)
// }

// for (let i = 0; i < toEscapePairs.length; i = i+2) {
//   let regex = new RegExp(toEscapePairs[i])

//   for (let j = 0; j < str.length; j++) {
//     str = str.replace(regex, toEscapePairs[i+1])
//   }
// }
