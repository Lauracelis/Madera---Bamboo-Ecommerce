import { useReducer } from 'react';
import { productsReducer } from './productsReducer';

export const useProducts = () => {

    const [products, dispatch] = useReducer(productsReducer, [])

    const handleNewProduct = (product) => {
        dispatch({
            type: "[PRODUCT] add product",
            payload: product
        })
    }
    const handleRemoveProduct = (id) => {
        dispatch({
            type: "[PRODUCT] remove product",
            payload: id
        })
    }

  return {
    products,
    handleNewProduct,
    handleRemoveProduct
  }
}
