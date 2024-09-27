const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.get("", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});
app.get("/about", (req, resp) => {
  resp.sendFile(`${publicPath}/temp.html`);
});

app.get("/profile", (req, resp) => {
  const user = {
    name: "kuldeep",
    age: 23,
    email: "kuldeep@gmail.com",
    skills: ["python", "java", "node.js", "js"],
  };
  resp.render("profile", { user });
});
app.get("/login", (req, resp) => {
  resp.render("login");
});
app.get("*", (req, resp) => {
  resp.sendFile(`${publicPath}/nopage.html`);
});

app.listen(5000);
