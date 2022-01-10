// const { add, multiple, divide } = require("./utils.js");
import { add, multiple, divide } from "./utils.mjs"; // change type of file from .js to .mjs to use import syntax

console.log(add(4, 2), multiple(4, 2), divide(4, 2));
