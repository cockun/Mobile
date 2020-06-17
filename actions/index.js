export const actFetchProducts = (products) => {
  return {
    type: 'FETCH_PRODUCTS',
    products,
  };
};
