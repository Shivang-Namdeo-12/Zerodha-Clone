const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    age: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    verificationCode: {
        type: String,
        required: true
    },

    isVerified: {
        type: Boolean,
        default: false
    }
});

const UserModel = model("User", UserSchema);

module.exports = { UserModel };