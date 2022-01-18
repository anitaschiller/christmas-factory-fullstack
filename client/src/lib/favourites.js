function isProductInListOfFavourites(favouriteProducts, favouriteProductToAdd) {
  return favouriteProducts.some(
    (everyFavouriteProduct) =>
      everyFavouriteProduct._id === favouriteProductToAdd._id
  );
}

function removeProductFromListOfFavourites(favouriteProducts, product) {
  return favouriteProducts.filter(
    (everyFavouriteProduct) => everyFavouriteProduct._id !== product._id
  );
}

export { isProductInListOfFavourites, removeProductFromListOfFavourites };
