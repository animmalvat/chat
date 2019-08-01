var mongoose = require("mongoose");

//creating schema
var message = new mongoose.Schema(
    {
        receiver: String,
        sender: String,
        message: String
    },
    { timestamps: true }
);

//creating model
module.exports = mongoose.model("message", message);
