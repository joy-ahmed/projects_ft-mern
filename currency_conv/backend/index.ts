import express from "express";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
const APIKEY = process.env.API_KEY;
const API_URL = "https://v6.exchangerate-api.com/v6/";
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});

//! Middleware
app.use(express.json());
app.use(limiter);

//! Routes
app.post("/api/convert", async (req, res) => {
  try {
    //get user data
    const { from, to, amount } = req.body;
    console.log(from, to, amount);
    const url = `${API_URL}/${APIKEY}/pair/${from}/${to}/${amount}`;
    const response = await axios.get(url, {
      headers: {
        "Accept-Encoding": "gzip, deflate",
      },
    });
    if (response.data && response.data.result === "success") {
      res.json({
        base: from,
        target: to,
        conversionRate: response.data.conversion_rate,
        amount: amount,
      });
    } else {
      res.json({
        error: "An error occurred. Please try again.",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

//! Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
