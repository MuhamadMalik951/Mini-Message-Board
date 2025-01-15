import express, { Router } from 'express';
// import { messages } from './messageController.js'; 
const newRouter = express.Router();

newRouter.get('/', (req, res) => {
  res.render('form');
});

newRouter.post('/', (req, res) => {
  messages.push({
    user: req.body.name,
    text: req.body.text,
    added: req.body.date,
  });
  res.redirect('/');
});

export default newRouter;
