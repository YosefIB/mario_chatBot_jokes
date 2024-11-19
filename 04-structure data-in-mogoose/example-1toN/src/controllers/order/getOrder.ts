import Order from "../../model/order/orderModel";

export async function getOrderByClientID(req:any, res:any) {
    try{
        const {clientID} = req.query
        if (!clientID) {
            return res.status(400).send({ error: "Client ID is required" });
        }

        const orders = await Order.find({ clien2tID: clientID }).populate('Client').populate('Product').exec();
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Server error" });
    }
}