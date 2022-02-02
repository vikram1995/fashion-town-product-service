import { findDataOrderBy } from "../../databaseUtils/dbOperations";

export const getProductOrderBy = async (orderBy,limit) => {
  console.log(orderBy, limit);
  const products = await findDataOrderBy(orderBy,limit);
  return products;
};
