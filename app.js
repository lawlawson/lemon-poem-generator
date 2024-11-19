import express from 'express';
import chatCompletion from './services/openai.js';

const app = express();

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('Hello from my lovely new server!');
// });

app.get('/test', async (req, res) => {
  const response = await chatCompletion('Provide an amusing sentence.');
  res.send(response);
});

app.get('/get-poem', async (req, res) => {
  const response = await chatCompletion(
    'Write a short, expressive poem about lemon cake, as if you are hungry. Just four lines!'
  );
  res.send({ poem: response });
});

export default app;
