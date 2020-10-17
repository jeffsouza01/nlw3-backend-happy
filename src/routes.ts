import { Router } from 'express';
import multer from 'multer';


import uploadConfig from './config/upload';
import OrphanagesCrontollers from './controllers/OrphanagesCrontollers';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesCrontollers.index);
routes.get('/orphanages/:id', OrphanagesCrontollers.show);
routes.post('/orphanages', upload.array('images') ,OrphanagesCrontollers.create);


export default routes;