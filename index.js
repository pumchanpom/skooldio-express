const express = require("express");
const exphbs = require("express-handlebars");
const restaurantRouter = require("./routes/restaurants");
const logger = require("./middleware/logger");
const app = express();

// Template Engine
const hbs = exphbs.create({ extname: "hbs" });
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Custom Middleware
app.use(logger);

// Routes
app.use("/apis/restaurants", restaurantRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Listening to Port 3000.");
});
