const uniqid = require("uniqid");
const chalk = require("chalk");
const fs = require("fs");

const addUser = (id, name, email, password) => {
  const users = loadUsers();

  users.push({
    id: id ? id : uniqid(),
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

const updateUser = (id, name, email, password) => {
  deleteUser(id);
  addUser(id, name, email, password);
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
