"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var path_1 = require("path");
var axios_1 = require("axios");
var app = express_1["default"]();
var port = 3000;
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var posts = [];
app.post('/upload-image-endpoint', upload.single('image'), function (req, res) {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }
    // לדוגמה, נחזיר את כתובת ה-URL של התמונה (בהנחה שאתה שומר את התמונה בשרת)
    var imageUrl = "/uploads/" + req.file.filename;
    res.json({ imageUrl: imageUrl });
    console.log('imahe', imageUrl);
});
app.use(body_parser_1["default"].json());
app.use(express_1["default"].static('public'));
app.get('/register', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, '../public/register', 'register.html'));
});
app.get('/login', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, '../public/login', 'index.html'));
});
app.get('/mainPage', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, '../public/mainPage', 'main.html'));
});
app.post('/api/add-posts', function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, imageURL = _a.imageURL;
    console.log('Received POST request:', req.body);
    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }
    var id = crypto.randomUUID();
    posts.push({ id: id, title: title, text: text, imageURL: imageURL });
    console.log('Current posts:', posts);
    res.status(201).json({ message: "Post added successfully" });
});
app.get('/api/get-posts', function (req, res) {
    res.json({ posts: posts });
});
app.patch('/api/updateTitle', function (req, res) {
    var _a = req.body, id = _a.id, title = _a.title;
    var post = posts.find(function (p) { return p.id === id; });
    if (post) {
        post.title = title;
        console.log('Updated title post:', post);
        res.status(200).json({ message: "Post title updated successfully" });
        console.log("Post updated successfully");
        console.log(posts);
    }
    else {
        res.status(404).json({ error: "Post not found" });
    }
});
app.patch('/api/updateText', function (req, res) {
    var _a = req.body, id = _a.id, text = _a.text;
    var post = posts.find(function (p) { return p.id === id; });
    if (post) {
        post.text = text;
        console.log('Updated text post:', post);
        res.status(200).json({ message: "Post text updated successfully" });
        console.log("Post updated successfully");
        console.log(posts);
    }
    else {
        res.status(404).json({ error: "Post not found" });
    }
});
app["delete"]('/api/delete-post', function (req, res) {
    var id = req.body.id;
    var postIndex = posts.findIndex(function (p) { return p.id === id; });
    if (postIndex === -1) {
        return res.status(404).json({ error: "Post not found" });
    }
    posts.splice(postIndex, 1);
    console.log('Deleted post:', posts[postIndex]);
    res.status(200).json({ message: "Post deleted successfully" });
    console.log("Post deleted successfully");
    console.log(posts);
});
app.post('/chat', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userMessage, response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userMessage = req.body.message;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1["default"].post('https://api.openai.com/v1/chat/completions', {
                        model: 'gpt-4',
                        messages: [{ role: 'user', content: userMessage }]
                    }, {
                        headers: {
                            Authorization: "Bearer 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"
                        }
                    })];
            case 2:
                response = _a.sent();
                res.send({ botResponse: response.data.choices[0].message.content });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(500).send({ botResponse: 'שגיאה בתשובת הבוט.' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
