const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
  command: "add",
  description: "number + number"
  handler: function (argv) {
    console.log("here")
  }
});
