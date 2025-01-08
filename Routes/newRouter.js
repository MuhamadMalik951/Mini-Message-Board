import express from 'express';
const { Router } = express;

export const newRouter = Router();
newRouter.get('/', (req, res) => {
  res.send('this is the new messages page of the mini message board.');
});
