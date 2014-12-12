var fs=require('fs');
var randomWords = require('random-words');

fs.appendFile('random.txt', randomWords({ min: 3, max: 10 }) + "\n", function (err){
    console.log("Random text added.");
    ReadNumLinesInFile();
});

ReadNumLinesInFile();
    
function ReadNumLinesInFile(){
    fs.readFile('random.txt', 'utf8', function(err,data) {
        console.log("Contents of my file: " + data);

    });
}
