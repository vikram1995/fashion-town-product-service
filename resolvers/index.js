import { productByFilters } from "./productByFilters";
import { productBySearchInput } from "./productBySearchInput";
import { addProduct } from "./addProduct";
import { getProductOrderBy } from "./productOrderBy";
//Define resolvers

export default {
  Query: {
    productByFilters: async (parent, filters) => {
      console.log(filters);
      return await productByFilters(filters);
    },
    productBySearchInput: async (parent, searchInput) => {
      console.log(searchInput);
      return await productBySearchInput(searchInput);
    },
    getProductOrderBy: async (parent, { orderBy, limit }) => {
      return await getProductOrderBy(orderBy, limit);
    },
  },

  Mutation: {
    addProduct: async (parent, productDetails) => {
      return await addProduct(productDetails.input);
    },
  },
};
