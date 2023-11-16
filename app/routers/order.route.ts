const passport = require("passport")
const express = require('express');
import { Request, Response } from 'express';
import * as ordersController from "../controllers/orders.controller"
const router = express.Router();
//import* as ordersController from '../controllers/orders.controller'

router.put('/:orderId', passport.authenticate('jwt', { session: false }), ordersController.changeOrderStatusAndPutAddress);
router.delete('/order_items/:orderItemId', passport.authenticate('jwt', { session: false }), ordersController.deleteOrderItem); 
router.get('/in_progress', passport.authenticate('jwt', { session: false }), ordersController.getInProgress);
router.get('/', passport.authenticate('jwt', { session: false }), ordersController.getUserOrders);
router.get('/:orderid/orderitems', passport.authenticate('jwt', { session: false }), ordersController.getOrderDetails)
export default router;