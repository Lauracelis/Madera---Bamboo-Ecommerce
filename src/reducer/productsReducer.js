export const productsReducer = ( initialState = {}, action ) => {
    console.log(action);
  switch (action.type) {
    case "[PRODUCT] add product":
      return [...initialState, action.payload];
    case "[PRODUCT] delete product":
      return initialState.filter((product) => product.id !== action.payload);

    default:
      return initialState;
  }
};
