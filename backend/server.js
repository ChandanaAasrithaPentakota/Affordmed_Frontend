const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Middleware
app.use((req, res, next) => {
  console.log([${new Date().toISOString()}] ${req.method} ${req.url});
  next();
});

// Routes
app.post("/shorten", (req, res) => {
  const { originalUrl, shortcode, validity } = req.body;
  if (!originalUrl || !originalUrl.startsWith("http")) {
    return res.status(400).json({ error: "Invalid URL" });
  }
  res.json({
    shortUrl: http://localhost:3000/${shortcode || "abc12"},
    expiry: Date.now() + (validity || 30) * 60000,
  });
});

app.get("/:shortcode", (req, res) => {
  if (req.params.shortcode === "abc12") {
    return res.redirect("https://google.com");
  }
  res.status(404).send("Shortcode not found");
});

app.listen(5000, () => console.log("✅ Backend running on http://localhost:5000"));