import { insertData } from "../../databaseUtils/dbOperations";
const moment = require("moment");

const insertExtraData = (productDetails) => {
  productDetails["product_id"] = "P" + moment().format("YYYYMMDDHHmmss");
  productDetails["inventory"] = 100;
  productDetails["is_in_stock"] = "In Stock";
  productDetails["listed_date"] = moment().format("YYYYMMDDHHmmss");
};

export const addProduct = async (productDetails) => {
  try {
    insertExtraData(productDetails);
    console.log(productDetails);
    await insertData("insertOne", productDetails);
    return `product Added with Id ${productDetails.product_id}`;
  } catch (error) {
    console.log(error)
    return "Failed to add product check log"
  }
};
