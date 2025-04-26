const app = require('./app');

const PORT = 3000;

// Add a root route handler directly in server.js
app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 TravelEase Backend Server is Running!</h1>
    <p>Welcome to the API server. Try visiting <code>/api</code> endpoints.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
