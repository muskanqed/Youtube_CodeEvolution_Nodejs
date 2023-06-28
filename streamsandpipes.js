// streams in node

const fs = require("node:fs");
// Compression functionality using gzip
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./file2.txt");

// Events on Streams

/*readableStream.on("data", (chunk) => {
console.log(chunk);
  writeableStream.write(chunk);
});*/

// Pipes in node
// using Pipes to make the above task easy

readableStream.pipe(writeableStream)

// Chaining of Pipes in Node

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
