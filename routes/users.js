import express from 'express';
import { login, register, current } from '../controllers/users.js';

export const router = express.Router();

/* GET users listing. */
router.post('/login', login);
router.post('/register', register);
router.get('/current', current);
