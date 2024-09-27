const dbconnect = require("./connect_module");
dbconnect().then((resp) => {
  resp
    .find({ roll_no: 61 })
    .toArray()
    .then((data) => {
      console.log(data);
    });
});

// const main = (async () => {
//   let data = await dbconnect();
//   data = await data.find().toArray();
//   console.log(data);
// })();
