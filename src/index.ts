import express from 'express';

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/', async (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Add your routes here
