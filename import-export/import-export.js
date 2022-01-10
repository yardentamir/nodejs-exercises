// ? What is the difference between import and require
// ! answer:
// One of the major differences between require() and import() is that require() can be called from anywhere inside the program whereas import() cannot be called
// conditionally, it always runs at the beginning of the file.
// The difference between import and require is require is for Node.JS, and import is a standard ECMAScript proposal.
// import is an ECMAScript 6 feature, it hasn't yet been fully supported by Node.js.

//? How can you enable using the import syntax using node js
// ! answer:
// change type of file from .js to .mjs to use import syntax
//? Give 2 node.js environment variables that are not available when using the import syntax.
// import fs from "fs";
// import express from 'express';
