const uniqid = require("uniqid");
const chalk = require("chalk");
const fs = require("fs");

const addUser = (name, email, password) => {
  const users = loadUsers();
  users.push({
    id: uniqid(),
    name,
    email,
    password,
  });

  saveUsers(users);
  console.log(chalk.green.inverse("User saved!"));
};

const readUser = (id) => {
  const users = loadUsers();
  const currentUser = users.find((user) => user.id === id);
  return currentUser;
};

const deleteUser = (id) => {
  const users = loadUsers();
  const usersToKeep = users.filter((user) => user.id !== id);

  if (users.length > usersToKeep.length) {
    console.log(chalk.green.inverse("user deleted!"));
    saveUsers(usersToKeep);
  } else {
    console.log(chalk.red.inverse("No user found!"));
  }
};

const updateUser = function (id) {
  const users = loadUsers();
  const indexObj = users.indexOf(users.find((obj) => obj.id === id));
  if (readUser(id)) {
    // users[indexObj] = { id, name, email, password };
    Object.keys(users[indexObj]).forEach((key, i) => {
      users[indexObj][key] = arguments[i];
    });
    saveUsers(users);
    console.log(chalk.green.inverse("user updated!"));
  } else {
    console.log(chalk.red.inverse("No user found to update!"));
  }
};

const saveUsers = (users) => {
  fs.writeFileSync("users.json", JSON.stringify(users));
};

const loadUsers = () => {
  try {
    const usersJSON = fs.readFileSync("users.json").toString();
    return JSON.parse(usersJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { addUser, readUser, deleteUser, updateUser };
