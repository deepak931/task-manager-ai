// Create an Express API for task management with GET and POST endpoints
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(port, () => {
  console.log(`Task management API running at http://localhost:${port}`);
});
