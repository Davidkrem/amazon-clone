const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe');

if (process.env.NODE_ENV !== 'production') require('./secrets');

const STRIPE_API_KEY = process.env.STRIPE_API_KEY;

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('test');
});

app.post('/payments/create', async (req, res) => {
  try {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'usd',
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    next(error);
  }
});

exports.api = functions.https.onRequest(app);

// app.listen(process.env.PORT || 3000);
