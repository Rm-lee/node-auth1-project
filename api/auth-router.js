const router = require('express').Router();

const Users = require('../user/user-model.js')
router.get('/', (req,res) => {
    res.status(200).json({message: "working"})
})
router.post('/register', (req, res) => {
   console.log(req.body)
  Users.add(req.body)
  .then(res => {
      console.log(res)
      res.status(201).json(res)
  })
  .catch(err => {
      res.status(500).json(err)
  })
  });



module.exports = router;
