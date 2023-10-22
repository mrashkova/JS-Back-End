const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

const app = express();
const PORT = 3030;

mongoose
  .connect("mongodb://127.0.0.1:27017/furtnitures")
  .then(() => console.log("Successfully connectet to the DB"))
  .catch((err) =>
    console.log(`Error while connecting to the DB! Error: ${err}`)
  );

// Middleware Configurations
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // application/json -> AJAX requests
app.use(cors());
app.use(auth);

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");

//   next();
// });

console.log("it works");

app.get("/", (req, res) => {
  res.send("hello rest api");
});

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
