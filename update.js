const dbconnect = require("./connect_module");

const updatedata = async () => {
  const db = await dbconnect();
  const result = await db.updateMany(
    { name: "mohit" },
    {
      $set: { roll_no: 54, course: "computer science" },
    }
  );
  console.log(result);
};
updatedata();
