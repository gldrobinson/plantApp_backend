const { MongoClient } = require("mongodb");
const localUri = "mongodb://localhost:27017/";

let client = new MongoClient(localUri);

const ENV = process.env.NODE_ENV || "development";

let dbName;
let remoteUri;

if (ENV === "development") {
  dbName = "plantApp_DEV";
} else if (ENV === "test") {
  dbName = "plantApp_TEST";
} else if (ENV === "production") {
  dbName = "plantApp";
  remoteUri =
    "mongodb+srv://gldrobinson:F1naL1Pr0j3CT@cluster0.m2mod.mongodb.net/plantApp?retryWrites=true&w=majority";
  client = new MongoClient(remoteUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

const run = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.log("issue connecting ");
  }
};

module.exports = { run, client };
