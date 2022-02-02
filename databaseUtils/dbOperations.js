import { client } from "./dbConnection";
import config from "../config";

const db = client.db(config.dbName);
const col = db.collection(config.collectionName);

const insertData = async (operation, data) => {
  new Promise(async (resolve, rejects) => {
    try {
      const p = await col[operation](data);
      console.log("Data Inserted");
      resolve("data inserted");
    } catch (error) {
      console.log(error);
      rejects(error);
    }
  });
};

const findData = async (filter = {}, limit = 0, offset = 0) => {
  return new Promise(async (resolve, rejects) => {
    try {
      const totalCount = await col.find(filter).count();
      col
        .find(filter)
        .skip(offset)
        .limit(limit)
        .toArray(function (err, products) {
          if (err) throw err;
          resolve({ products, totalCount });
        });
    } catch (error) {
      rejects(error);
    }
  });
};

const updateData = async (where, set) => {
  new Promise(async (resolve, rejects) => {
    try {
      console.log("Connected correctly to server");
      const p = await col.updateOne(where, set);
      console.log("Data updated");
      resolve("data updated");
    } catch (error) {
      console.log(error);
      rejects(error);
    }
  });
};

const SearchData = async (pipeline) => {
  try {
    console.log(pipeline);
    const cursor = await col.aggregate(pipeline);
    const searchResult = [];
    await cursor.forEach((product) => {
      searchResult.push(product);
    });
    console.log(searchResult.length);
    return searchResult;
  } catch (error) {
    console.log(error);
  }
};

const findDataOrderBy = async (orderBy, limit) => {
  return new Promise(async (resolve, rejects) => {
    try {
      const result = await col.find().sort({[orderBy]: -1}).limit(limit);
      result.toArray((error, products) => {
        resolve(products);
      });
    } catch (error) {
      rejects(error);
    }
  });
};

export { insertData, findData, updateData, SearchData, findDataOrderBy };
