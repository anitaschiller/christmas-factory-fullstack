import express from 'express';

import {
  deleteCategory,
  getCategories,
  postCategory,
  updateCategory,
} from '../controllers/categories.controller.js';

const router = express.Router();

router.get('/categories', getCategories);
router.post('/categories', postCategory);
router.put('/categories/:categoryId', updateCategory);
router.delete('/categories/:categoryId', deleteCategory);

export default router;
