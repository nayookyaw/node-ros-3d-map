// index.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like images and CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Import route files
const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');

// Use the routes
app.use('/', homeRoutes);
app.use('/', aboutRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
