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
        var number = data.split("\n");
        var numRun = number.length-1;       
            console.log("I have been run " + numRun + " times!");
     });
}
