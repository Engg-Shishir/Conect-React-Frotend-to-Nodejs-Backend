var express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
  res.send('Api Is Working Properly');
});

module.exports = router;