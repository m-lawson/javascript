var fs= require('fs');
var randomWords = require('random-words');

fs.appendFile('random.txt', randomWords({ min: 3, max: 10 }) + "\n", function (err){
console.log("Random text added.")});

