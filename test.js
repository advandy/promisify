var promisify = require("promisify");
var fs = require("fs");
var fnReadFile = promisify(fs.readFile);

fnReadFile("test.txt")
.then(function(text) {
    console.log(text.toString());
})
.catch(function(err) {
    console.log(err);
});