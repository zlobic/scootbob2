var express = require('express');
var router = express.Router();

Ride = require('../models/rides')
/* GET home page. */
router.get('/pending-rides', function(req, res) {
  Ride.find({}).populate('drinker').exec()
  .then((result) => {
    debugger
    res.json(result);
  })
  .catch((err) =>{
    debugger
   console.log(err)
  })
});

module.exports = router;