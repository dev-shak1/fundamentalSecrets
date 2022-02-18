const { Router } = require('express');

const router = Router(); 

router.post('/clicked', (req, res) => {
  res.json(`Button clicked by user ${req.body.user} !`);
});

module.exports=router;