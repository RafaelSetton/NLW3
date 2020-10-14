import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesConstroller from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orphanages", OrphanagesConstroller.index)
routes.get("/orphanages/:id", OrphanagesConstroller.show)
routes.post("/orphanages", upload.array("images"), OrphanagesConstroller.create)

export default routes;