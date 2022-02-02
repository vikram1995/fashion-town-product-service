import { products } from '../../models'
export const productById = (productId) =>{
   return products.find((product) => product.productId === productId);
}