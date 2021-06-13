// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

var Person = function (startName) {
    let argumentCheck = function (arg) {
        if (typeof arg !== "string") {
            return false;
        } else return true;
    }

    let nameSplit = startName.split(" ");

    let name = nameSplit[0];
    let surname = nameSplit[1];

    this.getFirstName = function () {
        console.log(name);
        return name;
    }

    this.getLastName = function () {
        console.log(surname);
        return surname;
    }

    this.getFullName = function () {
        console.log(name + " " + surname);
        return name + " " + surname;
    }

    this.setFirstName = function (argument) {
        if (argumentCheck(argument)) {
            name = argument;
        }
    }

    this.setLastName = function (argument) {
        if (argumentCheck(argument)) {
            surname = argument;
        }
    }

    this.setFullName = function (argument) {
        if (argumentCheck(argument)) {
            let splitName = argument.split(" ");
            name = splitName[0];
            surname = splitName[1];
        }
    }
}

var bob = new Person("Bob Ross");
bob.setFirstName("Haskell");
bob.getFullName();
