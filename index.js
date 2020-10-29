const express = require("express");
// const User = require("./models/user");
const app = express();
const PORT = 4000;
const User = require("./models").user;


app.get("/", (req, res) => {
  res.send("Good morning #46");
});

app.get("/menu", (req, res) => {
  res.send(
    "##### MENU FOR TODAY ##### <br><ul><li>Breakfast: Say hello and show my app, recap about Sequelize-cli, models, migrations </li><li>Lunch(13:30): JWT's bcrypt & login & routers </li><li>Dinner(16:00): auth in middleware, pagination  </li><li>Tomorrow: 😭 PROJECT TIME!!!!  </li></ul>"
  );
});

app.get("/users", async (req, res) => {
  // user.findOne()  => returns a object
  // user.findByPk(id) => returns a object
  // user.findAll() => resturns a array
  const result = await User.findAll()
  res.send(result)
})



app.use(express.json());
app.listen(PORT, () => console.log("The server is Alive on port", PORT));
