// fs Module readFileSync and readFile

/*const fs = require("node:fs");

console.log("First");

const filecontent = fs.readFileSync("./file.txt", "utf-8");
console.log(filecontent);

console.log("Second");

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("Third");*/

// fs module writeFileSync and writeFile

fs.writeFileSync("./greet.txt", "Hello World");

fs.writeFile("./greet.txt", " Hello ken", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Written");
  }
});

// fs Promise Module

const fs = require("node:fs/promises");

fs.readFile("./file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

async function readFile() {
  try {
    const data = await fs.readFile("file.txt", "utf-8");
    console.log(data);
  } catch {
    console.log(error);
  }
}

readFile();
