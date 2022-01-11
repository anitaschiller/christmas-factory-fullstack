import { useEffect, useState } from 'react';
import styled from 'styled-components';

import TextInput from './TextInput';
import NumberInput from './NumberInput';
import Checkbox from './Checkbox';
import Select from './Select';
import RadioButton from './RadioButton';
import ProductTags from './ProductTags';

import isProductValid from '../lib/validation';

export default function ProductForm({ onAddProduct }) {
  const initialProduct = {
    name: '',
    price: 0,
    isDecorated: false,
    category: '',
    packageSize: '',
    contactEmail: '',
    tags: [],
  };

  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState(initialProduct);
  const [hasFormErrors, setHasFormErrors] = useState(false);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch('api/categories');
        const categoriesFromApi = await response.json();
        setCategories(categoriesFromApi);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCategories();
  }, []);

  const handleChange = (event) => {
    let inputValue = event.target.value; // "Glühwein"

    if (event.target.type === 'checkbox') {
      inputValue = event.target.checked;
    }

    // if (event.target.name === 'price') { parseInt }

    setProduct({
      // alle bestehenden Properties behalten
      // neu zu setzende Property -> deren Wert überschreiben
      ...product,
      [event.target.name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isProductValid(product)) {
      onAddProduct(product);
      // setProduct(initialProduct);
      setHasFormErrors(false);
    } else {
      setHasFormErrors(true);
    }
  };

  const updateTags = (tag) =>
    setProduct({ ...product, tags: [...product.tags, tag] });

  const deleteTag = (tagToDelete) => {
    const updatedTags = product.tags.filter((tag) => tag !== tagToDelete);
    setProduct({ ...product, tags: updatedTags });
  };

  return (
    <section>
      <h2>🎄 Add a new product 🍪</h2>
      {hasFormErrors && (
        <ErrorMessage>
          <div>
            🎅🏽
            <div className="bubble">🗯</div>
          </div>
          <p>
            <strong>Ho ho ho! </strong>
            Please check if all fields are correctly filled.
          </p>
        </ErrorMessage>
      )}
      <Form onSubmit={handleSubmit}>
        <TextInput
          onTextInputChange={handleChange}
          name="name"
          value={product.name}
        >
          Product Name
        </TextInput>

        <InputRow>
          <div>
            <NumberInput
              name="price"
              value={product.price}
              onNumberInputChange={handleChange}
            >
              Price (in €)
            </NumberInput>
          </div>

          <Checkbox
            name="isDecorated"
            value={product.isDecorated}
            onCheckboxChange={handleChange}
          >
            decorated
          </Checkbox>
        </InputRow>

        <Select
          name="category"
          value={product.category}
          options={categories}
          onSelectChange={handleChange}
        >
          Product Category
        </Select>

        <RadioButton value={product.packageSize} onRadioChange={handleChange}>
          Package Size
        </RadioButton>

        <ProductTags
          headline="Product Tags"
          tags={product.tags}
          onDeleteTag={deleteTag}
          onUpdateTags={updateTags}
        />

        <TextInput
          name="contactEmail"
          value={product.contactEmail}
          onTextInputChange={handleChange}
          placeholder="Add your email …"
        >
          Contact Email
        </TextInput>

        <div>
          <button>Add Product</button>
          {/* Optional */}
          <button
            type="reset"
            onClick={() => {
              setProduct(initialProduct);
              setHasFormErrors(false);
            }}
          >
            Reset
          </button>
        </div>
      </Form>
    </section>
  );
}

const InputRow = styled.div`
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  background: #620202;
  padding: 0.7rem 0.5rem 1.2rem;
  border-radius: 10px;

  label {
    display: block;
    font-weight: bold;
  }
  input,
  select {
    padding: 0.25rem;
    margin: 0.5rem 0 1rem;
  }

  button {
    background: var(--button-bg);
    border: 2px solid var(--button-bg);
    border-radius: 5px;
    color: var(--primary-color);
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem;
    width: 49%;
  }
  button:first-child {
    margin-right: 2%;
  }
  button:nth-child(even) {
    background: transparent;
  }
`;

const ErrorMessage = styled.div`
  align-items: center;
  background: var(--warning);
  border-radius: 6px;
  color: white;
  display: flex;
  gap: 2.5rem;
  margin: 0 0 1rem;
  padding: 0.5rem;

  div {
    font-size: 2.5rem;
    position: relative;
    transition: all 0.5s;
  }
  div:hover {
    transform: rotateZ(20deg);
  }

  div.bubble {
    font-size: 3rem;

    position: absolute;
    top: -17px;
    right: -38px;
  }
`;
