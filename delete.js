const dbconnect = require("./connect_module");

const deletedata = (async () => {
  const db = await dbconnect();
  const result = await db.deleteMany({ name: "pankaj" });
  console.log(result);
  if (result.acknowledged) {
    console.log("record deleted");
  }
})();
