import express from 'express';
import { title } from 'process';
const { Router } = express;

export const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleDateString(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleDateString(),
  },
];

export const indexRouter = Router();
indexRouter.get('/', (req, res) => {
  res.render('index', { messages: messages, title: 'Mini Message Board' });
});
