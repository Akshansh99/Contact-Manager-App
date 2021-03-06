const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        deafult: Date.now,
    },
});

module.exports = mongoose.model("user", UserSchema);
