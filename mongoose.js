//Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js and Deno (alpha).
const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://kuldeeplodi919:BdoHTrYYzm9QU4Ro@student.78oyb.mongodb.net/?retryWrites=true&w=majority&appName=student"
  );
  const productSchema = new mongoose.Schema({
    name: String,
    roll_no: Number,
    Branch: String,
    course: String,
  });
  const productsModel = new mongoose.model("node", productSchema);
  let data = new productsModel({ name: "yogi" });
  let result = await data.save();
  console.log(result);
};
main();

//In Mongoose, a schema defines the structure of a document, while a model provides an interface for interacting with the database:

//Schema

//Defines the document's structure, including properties, default values, validators, and data types.

//Model

//Provides an interface for creating, querying, updating, and deleting records based on the schema. A model is a constructor that's compiled from a schema definition.
