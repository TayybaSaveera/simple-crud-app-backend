const express = require("express");
const app = express();
const mongoose = require("mongoose");

const ProductRoute = require("./routes/productRoute.js");

app.use(express.json());
app.use("/", ProductRoute);

app.get("/", function (req, res) {
  res.send("Hello World");
});

mongoose
  .connect(
    "mongodb+srv://tayyba:12345@backenddb.ixxizac.mongodb.net/Product?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => console.log("Server is running on port 3000"));
  })
  .catch(() => console.log("Error!"));
