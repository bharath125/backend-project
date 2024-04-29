const express = require("express");

const mongoose = require("mongoose");

const productRoute = require("./route/product.route");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

mongoose
  .connect(
    "mongodb+srv://bharathntemp47:ytvRE3JLaURFuYsd@backenddb.bi29eta.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(3000, () =>
      console.log("Server running at https://localhost:3000")
    );
  })
  .catch(() => console.log("Database connection failed!"));

//mongodb+srv://bharathntemp47:ytvRE3JLaURFuYsd@backenddb.bi29eta.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB
//mongodb+srv://bharathntemp47:<password>@backenddb.bi29eta.mongodb.net/
