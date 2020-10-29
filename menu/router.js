
const {Router} = require("express")

const router = new Router()



router.get("/", (req, res) => {
    res.send(
      "##### MENU FOR TODAY ##### <br><ul><li>Breakfast: Say hello and show my app, recap about Sequelize-cli, models, migrations </li><li>Lunch(13:30): JWT's bcrypt & login & routers </li><li>Dinner(16:00): auth in middleware, pagination  </li><li>Tomorrow: 😭 PROJECT TIME!!!!  </li></ul>"
    );
  });
router.post("/", (req, res) => {
    res.send(
      "##### MENU FOR Tomorrow ##### </ul>"
    );
  });


  module.exports = router