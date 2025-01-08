import express from 'express';
import { indexRouter } from './Routes/indexRouter.js';
import { newRouter } from './Routes/newRouter.js';
const app = express();
const { Router } = express;

app.use('/', indexRouter);
app.use('/new', newRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`We are live here at ${PORT}.`);
});
