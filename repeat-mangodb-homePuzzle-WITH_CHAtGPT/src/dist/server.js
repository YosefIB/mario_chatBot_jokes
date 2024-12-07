"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var path_1 = require("path");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
app.get('/', function (req, res) {
    res.send('Hello World!');
});
//DB
var dbUrl = "mongodb+srv://yosefib88:FYdIUMhMIwGscX4y@cluster0.b5vsm.mongodb.net";
var database = 'repeat_mangoDB_homePuuzle';
//connection
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
//routes
var clientRoutes_1 = require("./routes/clientsRoutes/clientRoutes");
app.use("/api/clients", clientRoutes_1["default"]);
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
// שליחה של דף HTML ללקוח
app.use(express_1["default"].static(path_1["default"].join(__dirname, 'public')));
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
