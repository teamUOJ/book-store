const path = require('path');

const express = require('express');
const { body } = require('express-validator/check');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth.checkLoggedIn,isAuth.checkIsAdmin, adminController.getAddProduct);

// /admin/allOrders => GET
router.get('/allOrders', isAuth.checkLoggedIn,isAuth.checkIsAdmin, adminController.getAllOrders);

// /admin/products => GET
router.get('/products', isAuth.checkLoggedIn,isAuth.checkIsAdmin, adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('price').isFloat(),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth.checkLoggedIn,isAuth.checkIsAdmin,
  adminController.postAddProduct
);

router.get('/edit-product/:productId', isAuth.checkLoggedIn,isAuth.checkIsAdmin, adminController.getEditProduct);

router.post(
  '/edit-product',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('price').isFloat(),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth.checkLoggedIn,isAuth.checkIsAdmin,
  adminController.postEditProduct
);

router.delete('/product/:productId', isAuth.checkLoggedIn,isAuth.checkIsAdmin, adminController.deleteProduct);

module.exports = router;
