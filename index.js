const express = require("express");
const app = express();
const PORT = 4000;

// const User = require("./models").user;

app.get("/", (req, res) => {
    res.send("Good morning #46");
  });
app.get("/menu", (req, res) => {
    res.send("##### MENU FOR TODAY ##### <br><ul><li>Breakfast: Say hello & recap about Sequelize-cli, models, migrations </li><li>Lunch(13:30): JWT's bcrypt & login </li><li>Dinner(16:00): auth in middleware &  </li><li>Tomorrow: 😭 PROJECT TIME!!!!  </li></ul>");
  });

app.use(express.json());
app.listen(PORT, ()=> console.log("The server is Alive on port", PORT ))