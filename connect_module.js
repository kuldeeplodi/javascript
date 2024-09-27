const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://kuldeeplodi919:BdoHTrYYzm9QU4Ro@student.78oyb.mongodb.net/?retryWrites=true&w=majority&appName=student";
const database = "student";
const client = new MongoClient(url);

async function dbconnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("node");
}

module.exports = dbconnect;
