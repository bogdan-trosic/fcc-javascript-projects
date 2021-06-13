// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

function sumPrimes(num) {
    let currentNum = 2, numArr = [], testSequence = [];

    for (let i = 1; i < num; i++) {
        testSequence.push(currentNum);
        // console.log(testSequence)
        for (let j = 0; j < testSequence.length; j++) {
            if (currentNum % testSequence[j] === 0) {
                numArr.push(currentNum);
                // console.log(testSequence.length)
                // console.log(currentNum)
            }
        }
        currentNum = currentNum + 1;
    }

    let primeArr = numArr.filter(function (elem, index, arr) {
        if (elem !== arr[index + 1] && elem !== arr[index - 1]) {
            return elem;
        }
    })

    let sum = 0;
    for (let i = 0; i < primeArr.length; i++) {
        sum += primeArr[i];
    }

    return sum;
}

sumPrimes(10);
