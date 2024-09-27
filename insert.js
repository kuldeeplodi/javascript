const dbconnect = require("./connect_module");

const insert = (async () => {
  const db = await dbconnect();
  const result = db.insertMany([
    {
      name: "jyoti",
      roll_no: 58,
      Branch: "Btech",
      course: "computer science",
    },
    {
      name: "yogi",
      roll_no: 10,
      Branch: "Btech",
      course: "Electrical",
    },
    { name: "pankaj", roll_no: 5, Branch: "Btech", course: "Electrical" },
  ]);
  if ((await result).acknowledged == true) {
    console.log("data inserted");
  }
})();
