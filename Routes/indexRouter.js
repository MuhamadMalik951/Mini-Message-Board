import express from 'express';
const { Router } = express;

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

export const indexRouter = Router();
indexRouter.get('/', (req, res) => {
  res.send('this is the page that is being with index Router.');
});
