const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Routes for the main pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'START_HERE.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/readme', (req, res) => {
  res.type('text/plain');
  res.sendFile(path.join(__dirname, 'README.md'));
});

// 404 handler
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🏔️ Andorra 80KM Training Dashboard is running on http://localhost:${PORT}`);
  console.log(`📊 Open /dashboard for the main training dashboard`);
  console.log(`📖 Open /readme for documentation`);
});
