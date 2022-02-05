import { MongoClient } from "mongodb";
import config from "../config";

const uri = config.dbUri + "/" + config.dbName;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbConnect = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await client.connect();
      console.log("Connected correctly to Mongo DB server");
      resolve();
    } catch (err) {
      console.log(err.stack);
      reject();
    }
  });
};
const _dbConnect = dbConnect;
export { _dbConnect as dbConnect };
const _client = client;
export { _client as client };
