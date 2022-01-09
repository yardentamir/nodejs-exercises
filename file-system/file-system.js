const fs = require("fs");

// Create files
fs.writeFileSync("./file-system/notes.txt", "Hey there!");
fs.writeFileSync("./file-system/notes-copy.txt", "Hey there!");

// List all the filenames before renaming
getCurrentFilenames();

// Rename the file
fs.rename(
  "./file-system/notes-copy.txt",
  "./file-system/notes-new-name-copy.txt",
  () => {
    console.log("\nFile Renamed!\n");

    // List all the filenames after renaming
    getCurrentFilenames();
  }
);

// Function to get current filenames in directory
function getCurrentFilenames() {
  console.log("Current filenames:");
  fs.readdirSync(__dirname).forEach((file) => {
    console.log(file);
  });
}

// Using fs.exists() method
fs.exists("./file-system/notes-copy.txt", (exists) => {
  console.log(exists ? "\nFound" : "\nNot Found!");
});
