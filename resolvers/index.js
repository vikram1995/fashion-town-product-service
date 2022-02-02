import { products } from "../models";
import { productById } from "./productById/productById";
import { productByFilters } from "./productByFilters/productByFilters";
import { productBySearchInput } from "./productBySearchInput/productBySearchInput";
import { addProduct } from "./addproduct/addProduct";
import { getProductOrderBy } from "./productOrderBy/productOrderBy";
//Define resolvers
export default {
  Query: {
    //Resolver for 'user' queries by ID
    productById: async (parent, { product_id }) => {
      return productById(product_id);
    },
    products: async () => {
      return products;
    },
    productByFilters: async (parent, filters) => {
      console.log(filters);
      return await productByFilters(filters);
    },
    productBySearchInput: async (parent, searchInput) => {
      console.log(searchInput);
      return await productBySearchInput(searchInput);
    },
    getProductOrderBy: async (parent, { orderBy,limit }) => {
      return await getProductOrderBy(orderBy,limit);
    },
  },
  Mutation: {
    addProduct: async (parent, productDetails) => {
      return await addProduct(productDetails.input);
    },
  },
};
