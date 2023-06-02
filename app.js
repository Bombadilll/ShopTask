const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");

const productsRouter = require("./routes/api/products");
const shopsRouter = require("./routes/api/shops");
const ordersRouter = require("./routes/api/orders");

const app = express();

const corsOptions = {
  origin: "https://shop-task-bqmg.vercel.app",
  credentials: true,
};

dotenv.config();
const { DB_HOST, PORT = 5000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(app.listen(PORT))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors(corsOptions));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://shop-task-bqmg.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/api/products", productsRouter);
app.use("/api/shops", shopsRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
