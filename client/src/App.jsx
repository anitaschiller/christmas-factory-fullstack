import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../ThemeContext';
import ProductForm from './components/ProductForm';
import ProductCard from './components/ProductCard';

import { saveToLocal, loadFromLocal } from './lib/localStorage';
import {
  isProductInListOfFavourites,
  removeProductFromListOfFavourites,
} from './lib/favourites';

import './App.css';

function App() {
  const theme = useContext(ThemeContext);
  const localStorageProducts = loadFromLocal('_products');
  const localStorageFavouriteProducts = loadFromLocal('_favouriteProducts');

  const [products, setProducts] = useState(localStorageProducts ?? []);
  const [favouriteProducts, setFavouriteProducts] = useState(
    localStorageFavouriteProducts ?? []
  );

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

  return (
    <ThemeContext.Provider value={theme}>
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
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 38% auto;
  grid-template-rows: 1fr;
  height: 100%;
  margin: 0 auto;
  width: 80%;
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
