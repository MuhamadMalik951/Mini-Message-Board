import express from 'express';
import { indexRouter } from './Routes/indexRouter.js';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import newRouter from './Routes/newRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

const { Router } = express;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`We are live here at ${PORT}.`);
});
