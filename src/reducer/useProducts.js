import { useEffect, useReducer } from 'react';
import { productsReducer } from './productsReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('products')) || [];
}

export const useProducts = () => {

    const [products, dispatch] = useReducer(productsReducer, [], init)

    useEffect(() => {
      localStorage.setItem('products', JSON.stringify(products))
    }, [products])

    const handleNewProduct = (product) => {
        const action = {
            type: "[PRODUCT] add product",
            payload: product,
        }
        dispatch(action)
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
