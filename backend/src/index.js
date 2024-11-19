const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fashionItems = require("../data/fashionItems");
const filterRoutes = require("./api/filters");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api", filterRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the Filter Service API!");
}); 
// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


