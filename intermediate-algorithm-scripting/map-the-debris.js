// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;

    let orbitalArr = [];

    for (let element of arr) {
        let velocity = Math.sqrt(GM / (earthRadius + element.avgAlt));

        let orbitalP = (Math.PI * 2) * ((earthRadius + element.avgAlt) / velocity);
        orbitalP = Math.round(orbitalP);

        orbitalArr.push({ name: element.name, orbitalPeriod: orbitalP });
    }

    console.log(orbitalArr);
    return orbitalArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]);
