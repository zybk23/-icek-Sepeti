export const filterProducts = (text) => {
  return (dispatch) => {
    dispatch({ type: "FILTER_PRODUCTS", payload: text });
  };
};

export const searchProducts = (text) => {
  return (dispatch) => {
    dispatch({ type: "SEARCH_PRODUCTS", payload: text });
  };
};

export const increaseSelectedProductCount = (selectedProductId) => {
  return (dispatch) => {
    dispatch({ type: "INCREASE_COUNT", payload: selectedProductId });
  };
};

export const reduceSelectedProductCount = (selectedProductId) => {
  return (dispatch) => {
    dispatch({ type: "REDUCE_COUNT", payload: selectedProductId });
  };
};

export const changeCategoryId = (selectedCategoryId) => {
  return (dispatch) => {
    dispatch({ type: "CHANGE_CATEGORY", payload: selectedCategoryId });
  };
};

export const clickedPlusButton = (price) => {
  return (dispatch) => {
    dispatch({ type: "PLUS_SELECTED_PRODUCT_PRICE", payload: price });
  };
};
export const clickedMinusButton = (params) => {
  return (dispatch) => {
    dispatch({ type: "MINUS_SELECTED_PRODUCT_PRICE", payload: params });
  };
};
