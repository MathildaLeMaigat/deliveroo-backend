require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const data = require("./data.json");

app.get("/", (req, res) => {
  res.json(data);
});

// Heroku va nous fournir une variable process.env.PORT
// if (process.env.PORT) {
//   app.listen(process.env.PORT, () => {
//     console.log("Server started");
//   });
// } else {
//   app.listen(3200, () => {
//     console.log("Server started");
//   });
// }

app.listen(process.env.PORT || 3200, () => {
  console.log("Server started");
});
