const express = require('express');
const path = require('path');
const app = express(),
  bodyParser = require("body-parser");
port = 8000;

const userRoutes = require("./routes/userRoutes");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../test-app/out')));

app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send("Server running")
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:8000 !!`);
});