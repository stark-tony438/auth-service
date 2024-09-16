import { Router } from 'express';
import userHandler from './controller/User/routes';

const routeHandler = Router();

routeHandler.use('/user', userHandler);

export default routeHandler;