const {Router}  = require("express") 
const User = require("../models").user;
const bcrypt = require("bcrypt");
const { toJWT, toData } = require("../auth/jwt");

const router = new Router()

router.post("/", async (req, res)=> {
    const { email , password} = req.body
    if(!email || !password){
        res.status(400).send("missing some info")
        return
    }
    console.log("login with ", email, "password",password)
    const foundUser = await User.findOne({where: { email}})
    
    
    if(!foundUser) {
        res.status(400).send("user not found")
        return
    }
    if( !bcrypt.compareSync(password, foundUser.password)){
        res.send("password was wrong")
        return

    }
    const token = toJWT({id: foundUser.id})
    console.log("token", token)


    const checkedToken = toData(token)
    console.log("what is stored in a token", checkedToken)


    res.json({token})



    

})



module.exports = router