const express = require("express");
// const User = require("./models/user");
const menuRouter = require("./menu/router")
const userRouter = require("./users/router")
const loginRouter = require("./login/router")
const app = express();
const PORT = 4000;

app.use(express.json());


app.use("/menu", menuRouter)
app.use("/users", userRouter)
app.use("/login", loginRouter)


app.get("/", (req, res) => {
  res.send("Good morning #46");
});





app.listen(PORT, () => console.log("The server is Alive on port", PORT));
