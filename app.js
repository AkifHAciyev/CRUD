import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes/users.js';
import { routerEmployees } from './routes/employees.js';
dotenv.config();

export const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', router);
app.use('/api/employees', routerEmployees);
