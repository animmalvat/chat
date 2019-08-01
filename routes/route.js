const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const messageController = require("../controller/message.controller");

router.post('/signup' , userController.signup);
router.post('/login', userController.login);
router.post("/message_sent", messageController.message_sent);
router.post("/message_view", messageController.message_view);

module.exports = router;
