// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

function steamrollArray(arr) {
    let flatArr = [];

    function recursive(array) {
        let iterator = array.values();

        for (let value of iterator) {
            if (!Array.isArray(value)) {
                flatArr.push(value);
            } else {
                array = value;
                recursive(array);
            }
        }
    }

    recursive(arr);
    console.log(flatArr);

    return flatArr;
}

steamrollArray([1, {}, [3, [[4]]]]);

  // !!! Add an boolean element to check if condition is true of false for the base case and once there are no more elements to search for (undefined???) !!!

  // function recursive(array, iterator) {
  //   if (iterator > array.length) {
  //     return flatArr
  //   }

  //   if (!Array.isArray(array[iterator]) && !array[iterator] === undefined) {
  //     flatArr.push(array[iterator])
  //     iterator++
  //   } else {
  //     recursive(array[iterator], 0)
  //   }

  //   recursive(array, )
  // }

  // // recursive(arr, 0)
  // console.log(recursive(arr, 0))
