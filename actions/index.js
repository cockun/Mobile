export const actFetchProducts = (products) => {
  return {
    type: 'FETCH_PRODUCTS',
    products,
  };
};
export const actFetchCategories = (categories) => {
  return {
    type: 'FETCH_CATEGORIES',
    categories,
  };
};
