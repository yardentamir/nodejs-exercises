const crud = require("./crud.js");
const yargs = require("yargs");

yargs.command({
  command: "add",
  description: "add user name and email",
  name: {
    describe: "Enter name",
    demandOption: true,
    type: "string",
  },
  email: {
    describe: "Enter email",
    demandOption: true,
    type: "string",
  },
  password: {
    describe: "Enter password",
    demandOption: true,
    type: "password",
  },
  handler(argv) {
    crud.addUser(undefined, argv._[1], argv._[2], argv._[3]);
  },
});

yargs.command({
  command: "read",
  description: "read user by id",
  id: {
    describe: "Enter id of user to read",
    demandOption: true,
    type: "string",
  },
  handler(argv) {
    console.log(crud.readUser(argv._[1]));
  },
});

yargs.command({
  command: "delete",
  description: "delete user by id",
  id: {
    describe: "Enter id of user to delete",
    demandOption: true,
    type: "string",
  },
  handler(argv) {
    crud.deleteUser(argv._[1]);
  },
});

yargs.command({
  command: "update",
  description: "update user by id",
  id: {
    describe: "Enter id of user to update",
    demandOption: true,
    type: "string",
  },
  name: {
    describe: "Enter name",
    demandOption: true,
    type: "string",
  },
  email: {
    describe: "Enter email",
    demandOption: true,
    type: "string",
  },
  password: {
    describe: "Enter password",
    demandOption: true,
    type: "password",
  },
  handler(argv) {
    crud.updateUser(argv._[1], argv._[2], argv._[3], argv._[4]);
  },
});

yargs.parse();
