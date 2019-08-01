const express = require("express");
const router = express.Router();
const messageController = require("../controller/message.controller");

router.post("/message_sent", messageController.message_sent);
router.post("/message_view", messageController.message_view);

module.exports = router;
