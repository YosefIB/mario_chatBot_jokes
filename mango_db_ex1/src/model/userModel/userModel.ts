import { model, Schema } from "mongoose";

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
})

export const UserModel = model("User", UserSchema);

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
  




