const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "CRUD");
const filepath = `${dirpath}/apple.txt`;
fs.writeFileSync(filepath, "this is a simple text file");

fs.readFile(filepath, "utf8", (err, item) => {
  console.log(item);
});

fs.appendFile(filepath, "and file name is apple.txt", (err) => {
  if (!err) console.log("file is updated");
});
fs.rename(filepath, `${dirpath}/fruit.txt`, (err) => {
  if (!err) console.log("file name is updated");
});
fs.unlinkSync(`${dirpath}/fruit.txt`);
