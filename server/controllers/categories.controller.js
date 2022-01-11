import Category from '../models/category.model.js';

const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

const postCategory = async (req, res) => {
  const category = new Category({ name: req.body.name });

  try {
    const result = await category.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const updateCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  const categoryName = req.body.name;

  const result = await Category.findByIdAndUpdate(
    categoryId,
    { name: categoryName },
    { returnDocument: 'after' }
  );
  res.json(result);
};

const deleteCategory = async (req, res) => {
  const categoryId = req.params.categoryId;

  const result = await Category.findByIdAndDelete(categoryId);

  if (result) {
    res.json({ success: true, message: 'Successfully deleted category.' });
  } else {
    res.json({
      success: false,
      message: 'Could not delete Category from database.',
    });
  }
};

export { deleteCategory, getCategories, postCategory, updateCategory };
