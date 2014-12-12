var fs = require('fs');

fs.appendFile('hellofile.txt', 'Hello World\n', function (err) {
  console.log('The "data to append" was appended to file!');
});
