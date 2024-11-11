"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
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
exports.UserModel = mongoose_1.model("User", exports.UserSchema);
// async function createUser() {
//     const newUser = new UserModel({
//       username: "yosef",
//       password: "oksdkodas",
//       email: "yosef@example.com"
//     });
//     try {
//       await newUser.save();
//       console.log("User saved successfully!");
//     } catch (error) {
//       console.error("Error saving user:", error);
//     }
//   }
//   createUser();
