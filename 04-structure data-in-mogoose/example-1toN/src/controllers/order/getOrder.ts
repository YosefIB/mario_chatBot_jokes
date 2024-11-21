import Order from "../../model/order/orderModel";

export async function getOrderByClientID(req:any, res:any) {
    try{

        const orders = await Order.find().populate('Client').populate('Product').exec();
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Server error" });
    }
}