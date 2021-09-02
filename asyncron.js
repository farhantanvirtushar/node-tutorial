const fs = require("fs").promises;
const { reject, result } = require("lodash");

const start = async () => {
  try {
    const first = await fs.readFile("./content/first.txt", "utf-8");
    const second = await fs.readFile("./content/second.txt", "utf-8");
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
