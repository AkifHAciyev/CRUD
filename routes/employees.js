import express from 'express';
import { auth } from '../middleware/auth.js';
import { all, add, remove, edit, employee } from '../controllers/employees.js';

export const routerEmployees = express.Router();

routerEmployees.get('/', auth, all);
routerEmployees.get('/:id', auth, employee);
routerEmployees.post('/add', auth, add);
routerEmployees.delete('/remove/:id', auth, remove);
routerEmployees.put('/edit/:id', auth, edit);
