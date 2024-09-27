const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const database = "student";
const client = new MongoClient(url);

async function getData() {
  try {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("node");
    let response = await collection.find({}).toArray();
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close(); // Ensure the client connection is closed
  }
}

getData();
