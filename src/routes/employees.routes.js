import {Router} from 'express';
import {getEmployees, postEmployees, putEmployees, deleteemployees, getByIdEmployee} from '../controllers/employees.controller.js'

const router = Router();

router.get('/employees', getEmployees);

router.get('/employees/:id', getByIdEmployee);

router.post('/employees', postEmployees);

router.patch('/employees/:id', putEmployees);

router.delete('/employees/:id', deleteemployees);

export default router;