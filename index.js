const express = require("express");
const app = express();
const restaurantRouter = require("./routes/restaurants");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/apis/restaurants", restaurantRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

app.listen(3000, () => {
  console.log("Listening to Port 3000.");
});
