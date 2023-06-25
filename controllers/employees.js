import { prisma } from '../prisma/prisma-client.js';

/**
 * @route GET /api/employees
 * @desc Get all employees
 * @access Private
 */
export const all = async (req, res) => {
	try {
		const employees = await prisma.employee.findMany();

		res.status(200).json(employees);
	} catch {
		res.status(500).json({ message: "Can't get employees" });
	}
};

/**
 * @route POST /api/employees/add
 * @desc add employees
 * @access Private
 */
export const add = async (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		if (!data.firstName || !data.lastName || !data.adress || !data.age) {
			return res.status(400).json({ message: 'All fields are required' });
		}

		const employee = await prisma.employee.create({
			data: {
				...data,
				userId: req.user.id,
			},
		});

		return res.status(201).json(employee);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Something went wrong' });
	}
};

/**
 * @route POST /api/employees/add
 * @desc Remove employee
 * @access Private
 */

export const remove = async (req, res) => {
	const { id } = req.body;

	try {
		await prisma.employee.delete({
			where: {
				id,
			},
		});

		res.status(204).json('OK');
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	}
};

/**
 * @route PUT /api/empoyees/edit/:id
 * @desc Edit empoyee
 * @access Private
 */

export const edit = async (req, res) => {
	const data = req.body;
	const id = data.id;

	try {
		await prisma.employee.update({
			where: {
				id,
			},
			data,
		});

		res.status(204).json('OK');
	} catch (err) {
		res.status(500).json({ message: 'Something went wrong' });
	}
};

/**
 * @route GET /api/employees/:id
 * @desc Found employee
 * @access Private
 */
export const employee = async (req, res) => {
	const { id } = req.params;

	try {
		const employee = await prisma.employee.findUnique({
			where: {
				id,
			},
		});

		res.status(200).json(employee);
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	}
};
