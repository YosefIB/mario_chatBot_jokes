import express from 'express';
import { setOrder } from '../../controllers/order/setOrder';
import { getOrderByClientID } from '../../controllers/order/getOrder';




const router = express.Router();


router.post('/add-order', setOrder);
router.get('/get-order-by-id', getOrderByClientID)



export default router;