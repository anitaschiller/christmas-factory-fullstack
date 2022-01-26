import { useEffect, useState, useContext, useReducer } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../ThemeContext';
import themeReducer from './lib/themeReducer';
import ProductForm from './components/ProductForm';
import ProductCard from './components/ProductCard';

import { saveToLocal, loadFromLocal } from './lib/localStorage';
import {
  isProductInListOfFavourites,
  removeProductFromListOfFavourites,
} from './lib/favourites';

function App() {
  const theme = useContext(ThemeContext);
  const [shopTheme, dispatch] = useReducer(themeReducer, theme);
  console.log(shopTheme);

  const localStorageProducts = loadFromLocal('_products');
  const localStorageFavouriteProducts = loadFromLocal('_favouriteProducts');

  const [products, setProducts] = useState(localStorageProducts ?? []);
  const [favouriteProducts, setFavouriteProducts] = useState(
    localStorageFavouriteProducts ?? []
  );
  const [wishlistIsOpen, setWishlistIsOpen] = useState(false);

  async function fetchProducts() {
    const result = await fetch('api/products');
    const resultJson = await result.json();
    setProducts(resultJson);
  }

  useEffect(() => fetchProducts(), []);

  useEffect(() => {
    saveToLocal('_products', products);
  }, [products]);

  useEffect(() => {
    saveToLocal('_favouriteProducts', favouriteProducts);
    if (favouriteProducts.length === 0) {
      setWishlistIsOpen(false);
    }
  }, [favouriteProducts]);

  async function addProductToDatabase(product) {
    const result = await fetch('api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    return await result.json();
  }

  async function addProduct(product) {
    await addProductToDatabase(product);
    fetchProducts();
  }

  function addToFavourites(favouriteProductToAdd) {
    // Produkt ist schon auf der Liste der Favourites => Entfernen!
    if (isProductInListOfFavourites(favouriteProducts, favouriteProductToAdd)) {
      const favouritesToKeep = removeProductFromListOfFavourites(
        favouriteProducts,
        favouriteProductToAdd
      );
      setFavouriteProducts(favouritesToKeep);
    } else {
      // Produkt ist noch NICHT auf der Liste der Favourites => Hinzufügen!
      setFavouriteProducts([...favouriteProducts, favouriteProductToAdd]);
    }
  }

  function setThemeState(event) {
    const value = event.target.value;
    dispatch({
      type: 'CHANGE_THEME',
      value: value,
    });
  }

  return (
    <ThemeContext.Provider value={shopTheme}>
      <header>
        <form>
          <Select theme={shopTheme} onChange={setThemeState}>
            <option>Bitte Theme auswählen:</option>
            <option value="christmas">Weihnachten</option>
            <option value="valentine">Valentinstag</option>
          </Select>
        </form>
      </header>
      <Container>
        <ProductForm onAddProduct={addProduct} />
        <CardTree>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index}
              isFavourite={isProductInListOfFavourites(
                favouriteProducts,
                product
              )}
              onAddToFavourites={addToFavourites}
            />
          ))}
        </CardTree>
        <FavouritesDisplay>
          {favouriteProducts.length === 0 ? (
            <span>{shopTheme.favSymbolEmpty}</span>
          ) : (
            <span onClick={() => setWishlistIsOpen(!wishlistIsOpen)}>
              {shopTheme.favSymbolFilled}{' '}
              <small data-testid="wishlist-items">
                ({favouriteProducts.length})
              </small>
            </span>
          )}

          {wishlistIsOpen && (
            <Wishlist theme={shopTheme}>
              <h3>Deine Wunschliste</h3>
              {favouriteProducts.map((product, index) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  index={index}
                  isFavourite={isProductInListOfFavourites(
                    favouriteProducts,
                    product
                  )}
                  onAddToFavourites={addToFavourites}
                />
              ))}
            </Wishlist>
          )}
        </FavouritesDisplay>
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;

const Select = styled.select`
  background: ${(props) => props.theme.secondaryColor};
  border: none;
  padding: 0.5rem;
  margin: 0.5rem;
  color: ${(props) => props.theme.primaryColor};
`;

const Wishlist = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  border: 3px solid white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0.5rem;
`;

const FavouritesDisplay = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 1rem;
  right: 1rem;
  width: 12rem;

  span {
    font-size: 2rem;
    text-align: right;
    small {
      font-size: 1rem;
    }
  }
`;

const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 38% auto;
  grid-template-rows: 1fr;
  height: 100%;
  margin: 0 auto;
  position: relative;
  width: 90%;
`;

const CardTree = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 10rem;
  grid-auto-flow: row;
  gap: 10px 10px;
  grid-template-areas:
    '. . . area1 area1 . . .'
    '. . area2 area2 area3 area3 . .'
    '. area4 area4 area5 area5 area6 area6 .'
    'area7 area7 area8 area8 area9 area9 area10 area10';
  padding: 6rem 1rem;

  .area1 {
    grid-area: area1;
  }
  .area2 {
    grid-area: area2;
  }
  .area3 {
    grid-area: area3;
  }
  .area4 {
    grid-area: area4;
  }
  .area5 {
    grid-area: area5;
  }
  .area6 {
    grid-area: area6;
  }
  .area7 {
    grid-area: area7;
  }
  .area8 {
    grid-area: area8;
  }
  .area9 {
    grid-area: area9;
  }
  .area10 {
    grid-area: area10;
  }
`;
