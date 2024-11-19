import mongoose, { Schema, model, Document } from 'mongoose';

interface Iorder extends Document {
    clientID: mongoose.Schema.Types.ObjectId;
    productID: mongoose.Schema.Types.ObjectId;
    quantity: number;
    totalPrice: number;
}

const OrderSchema: Schema = new Schema({
    clientID: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },

});

const Order = mongoose.model<Iorder>('Order', OrderSchema);

export default Order;

