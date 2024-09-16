import { Router } from 'express';
import AccountController from './controller';

const accHandler= Router();

accHandler.post('/',AccountController.create);
accHandler.get('/',AccountController.list);
accHandler.put('/',AccountController.update);
accHandler.delete('/:id',AccountController.delete);
accHandler.post('/login',AccountController.login);

export default accHandler;