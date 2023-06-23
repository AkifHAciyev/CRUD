import bcrypt from 'bcrypt';
import { prisma } from '../prisma/prisma-client.js';
import jwt from 'jsonwebtoken';

/**
 * @route POST /api/user/login
 * @desс Login
 * @access Public
 */

export const login = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({ message: 'Please write your email or password' });
	}

	const user = await prisma.user.findFirst({
		where: {
			email,
		},
	});

	const isPasswordCorrect = user && (await bcrypt.compare(password, user.password));
	const secret = process.env.JWT_SECRET;

	if (user && isPasswordCorrect && secret) {
		res.status(200).json({
			id: user.id,
			email: user.email,
			name: user.name,
			token: jwt.sign({ id: user.id }, secret, { expiresIn: '1d' }),
		});
	} else {
		return res.status(400).json({ message: 'Incorrect username or password entered' });
	}
};

/**
 *
 * @route POST /api/user/register
 * @desc Register
 * @access Public
 */

export const register = async (req, res) => {
	const { email, password, name } = req.body;

	if (!email || !password || !name) {
		return res.status(400).json({ message: 'Please write your all information' });
	}

	const registeredUser = await prisma.user.findFirst({
		where: {
			email,
		},
	});

	if (registeredUser) {
		return res.status(400).json({ message: 'User with this email already exists' });
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassord = await bcrypt.hash(password, salt);

	const user = await prisma.user.create({
		data: {
			email,
			name,
			password: hashedPassord,
		},
	});

	const secret = process.env.JWT_SECRET;

	if (user && secret) {
		res.status(201).json({
			id: user.id,
			email: user.email,
			name,
			token: jwt.sign({ id: user.id }, secret, { expiresIn: '1d' }),
		});
	} else {
		return res.status(400).json({ message: 'Failed to create user' });
	}
};

/**
 *
 * @route GET /api/user/current
 * @desc user that login you
 * @access Private
 */

export const current = async (req, res) => {
	return res.status(200).json(req.user);
};
