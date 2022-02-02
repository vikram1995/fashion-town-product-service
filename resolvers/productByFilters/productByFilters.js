import { findData } from "../../databaseUtils/dbOperations";

const injectInOperator = (filters) => {
  for (const [key, value] of Object.entries(filters)) {
    if (Array.isArray(value)) {
      filters[key] = { $in: value };
    }
  }
  console.log(filters);
};

const getLimitAndOffset = (filters) => {
  let limit = 0;
  let offset = 0;
  if (filters && filters.page && filters.itemCount) {
    limit = parseInt(filters.itemCount[0]);
    offset = limit * (filters.page[0] - 1);

    delete filters.page;
    delete filters.itemCount;
  }
  console.log(limit, offset);
  return { limit, offset };
};

export async function productByFilters(filters) {
  const { limit, offset } = getLimitAndOffset(filters);
  injectInOperator(filters);
  try {
    const productsAndCount = await findData({ ...filters }, limit, offset);
    return productsAndCount;
  } catch (error) {
    console.log(error);
  }
}
