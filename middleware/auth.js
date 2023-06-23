import jwt from 'jsonwebtoken';
import { prisma } from '../prisma/prisma-client.js';

export const auth = async (req, res, next) => {
	try {
		let token = req.headers.authorization?.split(' ')[1];

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		const user = await prisma.user.findUnique({
			where: {
				id: decoded.id,
			},
		});

		req.user = user;
		next();
	} catch (err) {
		res.status(401).json({ message: 'not authorization' });
	}
};
