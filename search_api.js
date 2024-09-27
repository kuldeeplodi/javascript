const express = require("express");
require("./mongoose_connect");
const product = require("./products");
const app = express();

app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  console.log(req.params.key);
  let data = await product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { course: { $regex: req.params.key } },
    ],
  });
  resp.send(data);
});

app.listen(5000);
