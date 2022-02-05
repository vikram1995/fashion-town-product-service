import { gql } from "apollo-server";

export default gql`
  type Product @key(fields: "product_id") {
    product_id: String
    brand: String
    images: [String]
    title: String
    price: String
    dominant_color: String
    ideal_for: String
    product_type: String
    product_category: String
    product_details: String
    size_fit: String
    care_instructions: String
    inventory: String
    is_in_stock: String
    listed_date: String
  }
  type ProductsAndTotalCount {
    products: [Product]
    totalCount: Int
  }

  type Query {
    productBySearchInput(searchInput: String): [Product]
    getProductOrderBy(orderBy: String, limit: Int): [Product]
    productByFilters(
      product_id: String
      brand: [String]
      title: String
      price: String
      dominant_color: [String]
      ideal_for: [String]
      product_type: String
      product_category: [String]
      product_details: String
      care_instructions: String
      inventory: String
      is_in_stock: String
      listed_date: String
      page: [String]
      itemCount: [String]
    ): ProductsAndTotalCount
  }
  input ProductInput {
    brand: String
    title: String
    price: String
    dominant_color: String
    ideal_for: String
    product_category: String
    product_details: String
    size_fit: String
    care_instructions: String
    body: String
    images: [String]
  }
  type Mutation {
    addProduct(input: ProductInput): String
  }
`;
