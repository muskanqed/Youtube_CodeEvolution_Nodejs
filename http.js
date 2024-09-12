// Creating a Node Server

const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  // Json Response
  /*const superHero = {
    FirstName: "Bruce",
    LastName: "Waync",
  };*/

  //   res.writeHead(200, { "content-type": "application/json" });

  //   Dynamic behaviour using StringReplacement
  const name = "Vishwas";
  res.writeHead(200, { "content-type": "text/html" });

  //  Html Response
  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name);
  res.end(html);

  // Can also use pipe
  // fs.createReadStream("./index.html").pipe(res)

  //   res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
