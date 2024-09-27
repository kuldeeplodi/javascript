const express = require("express");
const reqFilter = require("./route");
const app = express();
const route = express.Router();

// app.use(reqFilter);
route.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("welcome to home page");
});
app.get("/user", (req, resp) => {
  resp.send("welcome to user page");
});
route.get("/about", (req, resp) => {
  resp.send("welcome to about page");
});
route.get("/contact", (req, resp) => {
  resp.send("welcome to contact page");
});
app.use("/", route);
app.listen(4500);
