"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setOrder_1 = require("../../controllers/order/setOrder");
var getOrder_1 = require("../../controllers/order/getOrder");
var router = express_1["default"].Router();
router.post('/add-order', setOrder_1.setOrder);
router.get('/get-order-by-id', getOrder_1.getOrderByClientID);
exports["default"] = router;
