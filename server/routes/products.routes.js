import express from 'express';

import {
  deleteProduct,
  getProducts,
  postProduct,
  updateProduct,
} from '../controllers/products.controller.js';

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', postProduct);
router.put('/products/:productId', updateProduct);
router.delete('/products/:productId', deleteProduct);

export default router;
