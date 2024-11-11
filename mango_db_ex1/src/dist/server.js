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
exports.UserModel = exports.UserSchema = void 0;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var body_parser_1 = require("body-parser");
var path_1 = require("path");
var mongoose_2 = require("mongoose");
var app = express_1["default"]();
var port = 3000;
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
// let posts: Array<{ title: string, text: string, imageURL: string, id:string }> = [];
app.use(body_parser_1["default"].json());
app.post('/upload-image-endpoint', upload.single('image'), function (req, res) {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }
    // לדוגמה, נחזיר את כתובת ה-URL של התמונה (בהנחה שאתה שומר את התמונה בשרת)
    var imageUrl = "/uploads/" + req.file.filename;
    res.json({ imageUrl: imageUrl });
    console.log('imahe', imageUrl);
});
//Connect to server database
var dbUrl = "mongodb+srv://yosefib88:FYdIUMhMIwGscX4y@cluster0.b5vsm.mongodb.net";
var database = 'fs-jun24';
mongoose_1["default"].connect(dbUrl + "/" + database).then(function () {
    console.info("DB connected");
})["catch"](function (err) {
    console.error(err);
});
// stractur of users
exports.UserSchema = new mongoose_2.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    }
});
exports.UserModel = mongoose_2.model("User", exports.UserSchema);
function createUser() {
    return __awaiter(this, void 0, void 0, function () {
        var newUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newUser = new exports.UserModel({
                        username: "yo223sef",
                        password: "oksd112s23kodas",
                        email: "yos32223ef@example.com"
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, newUser.save()];
                case 2:
                    _a.sent();
                    console.log("User saved successfully!");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error saving user:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
createUser();
//Routes // includ: add/get/delete/editText/editTitle/
var postsRoutes_1 = require("./routes/postsRoutes");
app.use("/api/posts", postsRoutes_1["default"]);
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
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
