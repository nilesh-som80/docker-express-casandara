var express = require('express');
var router = express.Router();
var userRoutes = require("./users");
const scyllaClient = require("../cassandra-connector")
/* GET home page. */
router.get('/', function(req, res, next) {
  scyllaClient.execute("SELECT * FROM user;").then(data=>{
    if (data && data.rows)
      return res.json({list:data.rows});
    return;
  }).catch(err=>{
    console.log(err)
    res.json({message:"internal error"});
    return;
  })
});
router.use('/user',userRoutes)
module.exports = router;
