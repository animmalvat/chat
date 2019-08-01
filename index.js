const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/route");

require("dotenv").config();

var app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

mongoose.connect(
    process.env.MONGO_DB_CONNECTION,
    {
        useNewUrlParser: true
    },
    function(err, db) {
        if (err) {
            console.log(
                "please restart the server and/or check the connection"
            );
        } else {
            console.log("mongodb connected");
        }
    }
);

app.use("/", router);

app.listen(process.env.PORT, () => {
    console.log("server is running at ", process.env.PORT);
});
