// requirements and tests: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

function findLongestWordLength(str) {
  let arr = str.split(" ");
  let tempString = 0;

  for (let i = 0; i < arr.length; i++) {
    if (tempString < arr[i].length) {
      tempString = arr[i].length;
    }
  }

  return tempString;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
