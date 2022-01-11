import mongoose from 'mongoose';

const Category = mongoose.model('Category', { name: String });

export default Category;
