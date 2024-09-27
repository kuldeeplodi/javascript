const express = require("express");
const app = express();
app.get("/home", (req, res) => {
  res.send(`<h1>welcome , to home page</h1>
    <a href="/about">go to about page</a>`);
});
app.get("/about", (req, res) => {
  res.send(
    `<input type="text" placeholder="username"/>
    <button>click me</button>
    <a href="/home">go to home page</a>
    <a href="/help">go to help page</a>`
  );
});
app.get("/help", (req, res) => {
  res.send([
    { name: "kuldeep", age: 22 },
    { name: "kumkum", age: 21 },
    { name: "yogi", age: 24 },
  ]);
});

app.listen(5000);
