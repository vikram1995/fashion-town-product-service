import { SearchData } from "../databaseUtils/dbOperations";
import * as fs from "fs";
import config from "../config";
const getPipeline = (searchInput) => {
  console.log(searchInput);
  return [
    {
      $search: {
        index: "searchProducts",
        text: {
          query: searchInput,
          path: {
            wildcard: "*",
          },
        },
      },
    },
  ];
};
const logSearchText = (searchText) => {
  const searchTextString = JSON.stringify(searchText) + "\n";
  fs.appendFile(config.searchTextLogFilePath, searchTextString, function (err) {
    if (err) throw err;
  });
};
export async function productBySearchInput({ searchInput }) {
  const pipeline = getPipeline(searchInput);
  logSearchText(searchInput);
  console.log(pipeline);
  try {
    const data = await SearchData(pipeline);
    return data;
  } catch (error) {
    console.log(error);
  }
}
