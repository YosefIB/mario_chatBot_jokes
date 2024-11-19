import express from 'express'
import mongoose from "mongoose";  
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//DB
const dbUrl = "mongodb+srv://yosefib88:FYdIUMhMIwGscX4y@cluster0.b5vsm.mongodb.net"
const database = 'tryyyy';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
import clientsRouter from './routes/clientsRoutes/clientRoutes';
app.use("/api/clients", clientsRouter);

import productsRouter from './routes/products/productRoute';
app.use("/api/products", productsRouter);

import commentsRouter from './routes/comments/commentsRoute';
app.use("/api/comments", commentsRouter);

import orderRouter from './routes/order/orderRoute';
app.use ("/api/order", orderRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})