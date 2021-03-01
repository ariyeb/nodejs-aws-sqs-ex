const express = require('express');
const { createQueue, sendMessageToQueue, pollMessages } = require('../middleware/sqs');

const router = new express.Router();

router.post('/create-queue', createQueue, (req, res) => {
    res.send({
        queueUrl: req.queueUrl
    });
});

router.post("/send-message", sendMessageToQueue, (req, res) => {
    res.send({
        messageId: req.messageId
    });
});

router.get("/poll-messages", pollMessages, (req, res) => {
    res.send(req.messages);
});

module.exports = router;