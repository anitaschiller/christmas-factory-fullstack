import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

export default function ProductCard({
  index,
  product,
  isFavourite,
  onAddToFavourites,
}) {
  const theme = useContext(ThemeContext);
  return (
    <Card
      theme={theme}
      className={'area' + (index < 10 ? index + 1 : '')}
      style={index > 9 ? { gridRowStart: Math.floor((index - 2) / 4) + 3 } : {}}
    >
      <h3>{product.name}</h3>
      <p>
        {product.category} // {product.price} €
      </p>
      <FavouriteIcon onClick={() => onAddToFavourites(product)}>
        {isFavourite ? theme.favSymbolFilled : theme.favSymbolEmpty}
      </FavouriteIcon>
    </Card>
  );
}

const Card = styled.article`
  background: ${(props) => props.theme.secondaryColor};
  border-radius: 8px;
  grid-column: span 2;
  padding: 0.5rem 1rem 0.5rem;
  position: relative;

  &:hover {
    background: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
  }
`;

const FavouriteIcon = styled.span`
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
`;
