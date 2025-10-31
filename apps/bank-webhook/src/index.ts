import express from "express";

const app = express();

app.post("/hdfcWebhook", (req, res) => {
    const paymentInfo = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount,
    };
});
