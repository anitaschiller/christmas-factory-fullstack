import Product from '../models/product.model.js';

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const postProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    isDecorated: req.body.isDecorated,
    category: req.body.category,
    packageSize: req.body.packageSize,
    tags: req.body.tags,
    contactEmail: req.body.contactEmail,
  });

  try {
    const result = await product.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.productId;

  const productData = {
    name: req.body.name,
    price: req.body.price,
    isDecorated: req.body.isDecorated,
    category: req.body.category,
    packageSize: req.body.packageSize,
    tags: req.body.tags,
    contactEmail: req.body.contactEmail,
  };

  // TODO: add try catch around this operation
  const result = await Product.findByIdAndUpdate(productId, productData, {
    returnDocument: 'after',
  });

  res.json(result);
};

const deleteProduct = async (req, res) => {
  const productId = req.params.productId;

  try {
    const result = await Product.findByIdAndDelete(productId);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export { deleteProduct, getProducts, postProduct, updateProduct };
