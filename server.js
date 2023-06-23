const express = require("express");

require("colors");

const dotenv = require("dotenv");
const connectDb = require("./config/config");

const restaurantRoutes = require("./routes/restaurantRoute");

dotenv.config();

connectDb();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node Server</h1>");
});

app.use("/api/restaurant", restaurantRoutes);

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
      .inverse
  );
});
