import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://admin:admin123@cluster0.a9zwe.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbConnect = () => {
    return new Promise(async(resolve, reject) => {
        try {
            await client.connect();
            console.log("Connected correctly to Mongo DB server");
            resolve();
        } catch (err) {
            console.log(err.stack);
            reject();
        }
    })

}
const _dbConnect = dbConnect;
export { _dbConnect as dbConnect };
const _client = client;
export { _client as client };
