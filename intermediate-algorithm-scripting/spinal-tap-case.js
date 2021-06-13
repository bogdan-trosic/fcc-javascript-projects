// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str) {

    let splitArr = str.split("");

    for (let i = 0; i < splitArr.length; i++) {
        let check = splitArr[i].search(/[A-Z]/);

        if (check === 0) {
            splitArr[i] = splitArr[i].toLowerCase();
            splitArr.splice(i, 0, "-");
        }

        check = splitArr[i].search(/[_ ]/);

        if (check === 0) {
            splitArr[i] = "-";
        }
    }

    if (splitArr[0] === "-") {
        splitArr.shift();
    }

    str = splitArr.join("");
    str = str.replace(/--/g, "-");
    
    console.log(str);

    return str;
}

spinalCase('This Is Spinal Tap');
