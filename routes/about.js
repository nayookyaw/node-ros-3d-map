const express = require('express');
const router = express.Router();

// About route
router.get('/about', (req, res) => {
  res.render('layout', { page: '/about/about' });
});

module.exports = router;