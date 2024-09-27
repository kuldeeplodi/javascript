const express = require("express");
const mongodb = require("mongodb");
const dbconnect = require("./connect_module");
const app = express();
app.use(express.json());
app.get("", async (req, resp) => {
  let data = await dbconnect();
  data = await data.find().toArray();
  resp.send(data);
});

app.post("/", async (req, resp) => {
  let data = await dbconnect();
  let result = await data.insertMany(req.body);
  resp.send(result);
});

app.put("/", async (req, resp) => {
  let data = await dbconnect();
  let result = data.updateMany({ roll_no: { $gt: 50 } }, { $set: req.body });
  resp.send({ result: "update" });
});

app.delete("/:id", async (req, resp) => {
  console.log(req.params.id);
  const data = await dbconnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});
app.listen(4500);
