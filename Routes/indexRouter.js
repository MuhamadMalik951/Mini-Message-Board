import express from 'express';
// import { title } from 'process';
import messageController from '../controllers/messageController.js';
const { Router } = express;

export const indexRouter = Router();
await indexRouter.get('/', messageController);