// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

// improve - use an algorithm to determine the numeral rather than check all possibilities with an object containing all the values like now

function convertToRoman(num) {
    let decArr = [];
    let numerals = { "I": 1, "II": 2, "III": 3, "IV": 4, "V": 5, "VI": 6, "VII": 7, "VIII": 8, "IX": 9, "X": 10, "XX": 20, "XXX": 30, "XL": 40, "L": 50, "LX": 60, "LXX": 70, "LXXX": 80, "XC": 90, "C": 100, "CC": 200, "CCC": 300, "CD": 400, "D": 500, "DC": 600, "DCC": 700, "DCCC": 800, "CM": 900, "M": 1000, "MM": 2000, "MMM": 3000 };
    num = num.toString();

    for (let i = 0; i < num.length; i++) {
        if (num.length - i == 4 && num[i] != 0) {
            decArr.push(num[i] + "000");
        } else if (num.length - i == 3 && num[i] != 0) {
            decArr.push(num[i] + "00");
        } else if (num.length - i == 2 && num[i] != 0) {
            decArr.push(num[i] + "0");
        } else if (num[i] != 0) {
            decArr.push(num[i]);
        }
    }

    let result = "";

    for (let i = 0; i < decArr.length; i++) {
        for (let elem in numerals) {
            if (decArr[i] == numerals[elem]) {
                result = result + elem;
            }
        }
    }

    console.log(result);
    return result;
}

convertToRoman(3498);
