// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

function checkCashRegister(price, cash, cid) {

    let changeRaw, availableCash = 0;

    changeRaw = cash - price;

    for (let i = 0; i < cid.length; i++) {
        for (let j = 1; j < cid[i].length; j++) {
            availableCash += cid[i][j];
        }
    }

    availableCash = availableCash.toPrecision(5);

    if (availableCash < changeRaw) {
        console.log("INSUFFICIENT_FUNDS");
        return { status: "INSUFFICIENT_FUNDS", change: [] };

    } else if (availableCash == changeRaw) {
        console.log(cid);
        return { status: "CLOSED", change: cid };

    } else {

        cid.reverse()

        let resultArray = [];

        let checkArray = [
            [100],
            [20],
            [10],
            [5],
            [1],
            [0.25],
            [0.10],
            [0.05],
            [0.01]
        ];

        for (let i = 0; i < cid.length; i++) {
            checkArray[i][1] = cid[i][1];
        }

        for (let i = 0; i < checkArray.length; i++) {
            if (changeRaw >= checkArray[i][0]) {

                let n = 0;
                let currentApoen = checkArray[i][0];

                while (checkArray[i][0] <= changeRaw && n < checkArray[i][1]) {

                    n += currentApoen;
                    changeRaw -= currentApoen;
                    changeRaw = changeRaw.toFixed(2);
                }

                resultArray.push(cid[i])
                resultArray[resultArray.length - 1].splice(1, 1, n);
            }
        }

        if (changeRaw != 0) {
            console.log("INSUFFICIENT_FUNDS");
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        } else {
            console.log(resultArray)
            return { status: "OPEN", change: resultArray };
        }
    }
}

checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);
