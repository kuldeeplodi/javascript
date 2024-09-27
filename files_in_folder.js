const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "files");
console.warn(dir);
for (i = 0; i < 5; i++) {
  fs.writeFileSync(dir + `/hello${i}.txt`, "a simple file ");
}
