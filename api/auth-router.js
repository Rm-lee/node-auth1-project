const router = require('express').Router();
const bcrypt = require("bcryptjs")

const Users = require('../user/user-model.js')
router.get('/', (req,res) => {
    res.status(200).json({message: "working"})
})
router.post('/register', (req, res) => {
  Users.add(req.body)
  .then(ress => {
      console.log(ress)
      res.status(201).json(ress)
  })
  .catch(err => {
      res.status(500).json(err)
  })
  });

router.post("/login", async (req,res,next) => {
    try { 
        const {username,password}= req.body
        const user = await Users.findBy({username}).first()
    const passwordValid = await bcrypt.compare(password, user.password)
    if (user && passwordValid) {
        res.status(200).json({
            message: 'welcome'
        
        })
    }
    else {
        res.status(401).json({
            message:"invalid"
        })
    }
}
catch (err){
    next(err)
}
})

module.exports = router;
