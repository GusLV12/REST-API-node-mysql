import {Router} from 'express';
import {getEmployees, postEmployees, putEmployees, deleteemployees} from '../controllers/employees.controller.js'

const router = Router();

router.get('/employees', getEmployees);

router.post('/employees', postEmployees);

router.put('/employees', putEmployees);

router.delete('/employees', deleteemployees);

export default router;