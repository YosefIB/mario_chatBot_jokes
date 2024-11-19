"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var OrderSchema = new mongoose_1.Schema({
    clientID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'Client', required: true },
    productID: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
});
var Order = mongoose_1["default"].model('Order', OrderSchema);
exports["default"] = Order;
