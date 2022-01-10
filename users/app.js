const crud = require("./crud.js");
const yargs = require("yargs");

yargs.command({
  command: "add",
  description: "add user name and email",
  builder: {
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
  },
  handler({ name, email, password }) {
    crud.addUser(name, email, password);
  },
});

yargs.command({
  command: "read",
  description: "read user by id",
  builder: {
    id: {
      describe: "Enter id of user to read",
      demandOption: true,
      type: "string",
    },
  },
  handler({ id }) {
    console.log(crud.readUser(id));
  },
});

yargs.command({
  command: "delete",
  description: "delete user by id",
  builder: {
    id: {
      describe: "Enter id of user to delete",
      demandOption: true,
      type: "string",
    },
  },
  handler({ id }) {
    crud.deleteUser(id);
  },
});

yargs.command({
  command: "update",
  description: "update user by id",
  builder: {
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
      type: "string",
    },
  },
  handler({ id, name, email, password }) {
    crud.updateUser(id, name, email, password);
  },
});

yargs.parse();
