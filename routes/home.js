const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('layout', { page: '/home/home' });
});

module.exports = router;