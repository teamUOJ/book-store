const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/', shopController.getIndex);



router.get('/products/:productId', shopController.getProduct);

router.get('/cart', isAuth.checkLoggedIn, shopController.getCart);

router.post('/cart', isAuth.checkLoggedIn, shopController.postCart);

router.post('/cart-delete-item', isAuth.checkLoggedIn, shopController.postCartDeleteProduct);

router.get('/checkout', isAuth.checkLoggedIn, shopController.getCheckout);

router.get('/checkout/success', shopController.getCheckoutSuccess);

router.get('/checkout/cancel', shopController.getCheckout);

router.get('/orders', isAuth.checkLoggedIn, shopController.getOrders);

router.get('/orders/:orderId', isAuth.checkLoggedIn, shopController.getInvoice);

module.exports = router;
