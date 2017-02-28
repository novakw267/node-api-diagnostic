// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//
// A sample callback we will use to test your code is:
// const callback =  function (error, sum) {
//   if (error || sum !== 88) {
//     error = error || new Error(`sum is ${sum}`);
//   }
//
//   done(error);
// };
//
// Use `grunt test` to test your code.
// goal sum numbers in the filename
// take a plain text file with one number per line
// should add all numers and pass the result
// should throw an error if there is a non number line
//

'use strict';

const fs = require('fs'); // jshint ignore: line

let inFile = process.argv[2];
let outFile = process.argv[3];

const sumLines = (filename, callback) => {
  fs.readFile(inFile, 'utf-8', (error, data) => {
    if (error) {
      console.error(error.stack);
      return;
    }
  let numArray = data.split('\n');

  numArray.pop();

  let sum = numArray.reduce(add, 0);


  callback();
});

};

module.exports = {
  sumLines,
};
