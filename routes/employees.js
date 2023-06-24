import express from 'express';
import { auth } from '../middleware/auth.js';
import { router } from './users';

router.get('/', auth, () => {
	console.log('get all');
});
router.get('/:id', auth, () => {
	console.log('get user');
});
router.post('/:id', auth, () => {
	console.log('get user');
});
