// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

function sumFibs(num) {
    let fib = [1, 1], sum = 0;

    for (let i = 1; i < num; i++) {
        fib.push(fib[i] + fib[i - 1]);

        if (fib[i] > num) {
            i = num;
        }
    }

    for (let i = 0; i < fib.length; i++) {
        if (fib[i] % 2 === 1 && fib[i] <= num) {
            sum += fib[i];
        }
    }

    console.log(sum);
    return sum;
}

sumFibs(75025);
