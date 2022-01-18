import {
  isProductInListOfFavourites,
  removeProductFromListOfFavourites,
} from './favourites';

describe('is product on the favourites list', () => {
  it('should return false if the product is not on the favourites list', () => {
    const favouriteProducts = [];
    const favouriteProduct = { name: 'Vanillekipferl', _id: 2 };
    // what if you are testing with id instead of _id?
    expect(
      isProductInListOfFavourites(favouriteProducts, favouriteProduct)
    ).toBe(false);
  });
  it('should return true if the product is already on the favourites list', () => {
    const favouriteProducts = [{ name: 'Vanillekipferl', _id: 2 }];
    const favouriteProduct = { name: 'Vanillekipferl', _id: 2 };
    expect(
      isProductInListOfFavourites(favouriteProducts, favouriteProduct)
    ).toBe(true);
  });
});

describe('remove product from the favourites list', () => {
  it('should return a new array in which the product is not included anymore', () => {
    const favouriteProducts = [
      { name: 'Vanillekipferl', _id: 2 },
      { name: 'Glühwein', _id: 37 },
    ];
    const product = { name: 'Vanillekipferl', _id: 2 };

    expect(
      removeProductFromListOfFavourites(favouriteProducts, product)
    ).toEqual([{ name: 'Glühwein', _id: 37 }]);
  });
});
