const express = require('express')
const router = express.Router();

router.get('/categories/:categoryId/products/:porductId', (req, res) => {
  const {categoryId, porductId} = req.params;
  res.json({
    categoryId,
    porductId
  });
});

module.exports = router;
