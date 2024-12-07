import express from 'express'
import mongoose from "mongoose";  
import path from 'path';

const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//DB
const dbUrl = "mongodb+srv://yosefib88:FYdIUMhMIwGscX4y@cluster0.b5vsm.mongodb.net"
const database = 'repeat_mangoDB_homePuuzle';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
import clientsRouter from './routes/clientsRoutes/clientRoutes';
app.use("/api/clients", clientsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// שליחה של דף HTML ללקוח
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint לקבלת הודעות מהלקוח
// app.post('/chat', async (req, res) => {
//     const userMessage = req.body.message;

//     try {
//         const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//             model: 'gpt-4',
//             messages: [{ role: 'user', content: userMessage }]
//         }, {
//             headers: {
//                 Authorization: `Bearer YOUR_API_KEY`
//             }
//         });

//         res.send({ botResponse: response.data.choices[0].message.content });
//     } catch (error) {
//         res.status(500).send({ botResponse: 'שגיאה בתשובת הבוט.' });
//     }
// });
