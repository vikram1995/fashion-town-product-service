import { SearchData } from "../../databaseUtils/dbOperations";

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

export async function productBySearchInput(searchInput) {
  const pipeline = getPipeline(searchInput.searchInput);
  console.log(pipeline);
  try {
    const data = await SearchData(pipeline);
    return data;
  } catch (error) {
    console.log(error);
  }
}
