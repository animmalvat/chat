const messageModel = require("../models/message.model");

exports.message_sent = (req, res) => {
    var message = req.body.message;
    var sender = req.body.sender;
    var receiver = req.body.receiver;

    var msg = new messageModel({
        message: message,
        sender: sender,
        receiver: receiver
    });

    msg.save(err => {
        if (err) {
            res.send({
                status: "error",
                message: "message couldn't be stored"
            });
        } else {
            res.send({ status: "success", message: "message is stored" });
        }
    });
};

exports.message_view = (req, res) => {
    var sender = req.body.sender;
    var receiver = req.body.receiver;

    messageModel
        .find({ sender: sender, receiver: receiver })
        .then((data, err) => {
            if (err) {
                res.send({
                    status: "error",
                    message: "data couldn't be loaded"
                });
            } else {
                res.send(data);
            }
        });
};
