
const functions = require("firebase-functions");
// const logger = require("firebase-functions/logger");

const express = require("express")
const cors = require("cors")
const stripe = require("stripe") (process.env.STRIPE_SECRET_KEY)

//Publishable key : مفتاح الربط بين الاستراب بالفرنت ان 
//secret key : مفتاح الربط بينالارباح و بطقات الشراء وهذا لا يتم عرضه او الافصاح عنه بتاتا ويتم اضافته في جزء الباك اند  


//app config
const app = express(); //initionalse 
//medal
app.use(cors({origin:true}))
app.use(express.json())

// api routes
app.get("/" , (req , res)=>res.status(200).send("hello world"))
//example endpoint 
//http://127.0.0.1:5001/albukhbah-world/us-central1/api

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    // Ok - created
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  
  // example endpoint
  // http://127.0.0.1:5001/clone-dfcdb/us-central1/api
  
//listen command
exports.api = functions.https.onRequest(app)
