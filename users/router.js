const {Router}  = require("express") 
const User = require("../models").user;
const bcrypt = require("bcrypt")

const router = new Router()

router.get("/", async (req, res) => {
    // user.findOne()  => returns a object
    // user.findByPk(id) => returns a object
    // user.findAll() => returns a array
    const result = await User.findAll()
    res.send(result)
  })

router.post("/", async (req, res) => {
    const {name, email , password} = req.body
    if(!name || !email || !password){
        res.status(400).send("missing some info")
        return
    }
    const encryptedPassword = bcrypt.hashSync( password,10)
    let result
    try{
         result = await User.create({name, email, password: encryptedPassword })
    }
    catch(err){
        res.status(400).send("user already exists")
    }
    res.send(result)
  })
  
module.exports = router