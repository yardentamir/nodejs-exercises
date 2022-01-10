const yargs = require("yargs");

yargs.command({
  command: "add",
  description: "number + number",
  handler(argv) {
    console.log(argv._[1] + argv._[2]);
    // console.log(argv.numbers[1] + argv.numbers[2]); // --numbers=4
    // console.log(+process.argv[3] + +process.argv[4]);
  },
});

yargs.command({
  command: "sub",
  description: "number - number",
  handler(argv) {
    console.log(argv._[1] - argv._[2]);
  },
});

yargs.command({
  command: "mult",
  description: "number * number",
  handler(argv) {
    console.log(argv._[1] * argv._[2]);
  },
});

yargs.command({
  command: "pow",
  description: "number ^ number",
  handler(argv) {
    console.log(Math.pow(argv._[1], argv._[2]));
  },
});

yargs.parse();
