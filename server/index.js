const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Set the port number, or use 3000 as default

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Define route for serving the portfolio page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
