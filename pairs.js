/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns []
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns []
 ****************************************************************/
function pairs(names) {
  let randomizedPairs = [];
  if (names === []) {
    return randomizedPairs;
  }
  if (names === undefined) {
    return randomizedPairs;
  }

  while (names.length !== 0) {
    if (names !== []) {
      randomizedPairs.push([names.getRandom(), names.getRandom()]);
    }
  }
  if (names === []) {
    return randomizedPairs;
  } else if (
    names !== [] &&
    randomizedPairs[randomizedPairs.length - 1] === undefined
  ) {
    return randomizedPairs;
  } else if (randomizedPairs[randomizedPairs.length - 1][1] === undefined) {
    randomizedPairs[randomizedPairs.length - 1].pop();
  }
  return randomizedPairs;
}

//   let randomizedNames = names.getRandom();
//   let randomizedPairs = [];

//   for (let i = 0; i < randomizedNames.length; i++) {

//     if (i < randomizedNames.length - 1){
//     randomizedPairs.push([randomizedNames[i], randomizedNames[i+1])
//   } else {
//     randomizedPairs.push([randomizedNames[i]])
//   }
// }
// return randomizedPairs;

// let randomNames = shuffle(names);

// return (
//   randomPair1.slice(0, randomNames / 2) &&
//   randomPair2.slice(randomNames / 2, randomNames.length)
// );

module.exports = pairs;

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 *
 * let numbers = [1, 2, 3, 4];
 * let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
 * console.log(random); // 3 (the random element)
 * console.log(numbers);  // [1, 2, 4] (missing the random element)
 ************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

console.log(pairs([]));
