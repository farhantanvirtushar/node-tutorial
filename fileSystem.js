const fs = require("fs");

// const readFileSync = fs.readFileSync;
// const writeFileSync = fs.writeFileSync;

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// writeFileSync("./content/written.txt", `Result : ${first} , ${second} \n`, {
//   flag: "a",
// });

const readFile = fs.readFile;
const writeFile = fs.writeFile;
