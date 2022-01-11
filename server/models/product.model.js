import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  isDecorated: Boolean,
  category: String,
  packageSize: String,
  tags: Array,
  contactEmail: String,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
