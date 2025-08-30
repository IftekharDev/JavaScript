
var figlet = require("figlet");

figlet("I Love You Arshiya", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});