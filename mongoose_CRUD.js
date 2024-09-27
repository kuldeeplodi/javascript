const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://kuldeeplodi919:BdoHTrYYzm9QU4Ro@student.78oyb.mongodb.net/?retryWrites=true&w=majority&appName=student"
);
const productSchema = new mongoose.Schema({
  name: String,
  roll_no: Number,
  Branch: String,
  course: String,
});
const saveDB = async () => {
  const product = mongoose.model("products", productSchema);
  let data = new product({
    name: "yog",
    roll_no: 3,
    Branch: "Btech",
    course: "Electrical",
  });
  const result = await data.save();
  console.log(result);
};
saveDB();

const updateDB = async () => {
  const product = mongoose.model("products", productSchema);
  let data = await product.updateOne(
    { name: "yogi" },
    { $set: { roll_no: 23 } }
  );
  console.log(data);
};

const deleteDB = async () => {
  const product = mongoose.model("products", productSchema);
  let data = await product.deleteOne({ name: "yogi" });
  console.log(data);
};

const findDB = async () => {
  const product = mongoose.model("products", productSchema);
  let data = await product.find();
  console.log(data);
};

// BdoHTrYYzm9QU4Ro
// kuldeeplodi919
