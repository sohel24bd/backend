const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.json([
    {
      name: "Rebel",
    },
    {
      name: "Maruf",
    },
    {
      name: "Firoz",
    },
    {
      name: "Sohel",
    },
    {
      name: "Kamal",
    },
  ]);
});

app.listen(3000, () => {
  console.log(chalk.bgGreen("Server is running on port 3000"));
});
