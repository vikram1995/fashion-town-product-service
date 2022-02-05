import "dotenv/config"
const config = {
  dbUri: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.a9zwe.mongodb.net`,
  dbName: "fashion_town",
  collectionName: "products",
  appliedFilterLogFilePath: "/tmp/appliedFilterLogs.txt",
  searchTextLogFilePath: "/tmp/textSearchLogs.txt",
};
export default config