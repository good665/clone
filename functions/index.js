const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  `sk_test_51JCv9mLtowy047BYtS6tatBFoMN9Z6r8r9MhF5uteXD063xkgDk3ruXaPCscsqVY841CVqj8MEWg3Ded1LVu4qWf007pVHeNgd`
);

//API

// APP config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (requeset, response) => response.status(200).send("hello guii"));
app.post(`/payments/create`, async (requeset, response) => {
  const total = requeset.query.total;
  console.log("지불 방식 총액 >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subuits of the currency
    currency: "usd",
  });
  //OK-Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/challenge-865c6/us-central1/api
