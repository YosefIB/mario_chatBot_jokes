import Order from "../../model/order/orderModel";
import { request, Response } from 'express';

export async function setOrder(req: any, res: any){
    try {
        const { clientID, productID, quantity, totalPrice } = req.body;
        if (!clientID || !productID || !quantity || !totalPrice) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;        
        }

const result = await Order.create({clientID, productID, quantity, totalPrice})
        res.status(201).json({ message: 'Order created successfully', order: result });


    }
     catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
