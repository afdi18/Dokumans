import { Router } from 'express';
import * as DocController from '../controllers/DocController.js';
import * as UploadController from '../controllers/UploadController.js';
import { verifyToken } from '../middleware/VerifyToken.js';
export const routes = Router();

routes.get("/all",  DocController.getDok);
routes.post("/add-dok",  DocController.insertDok);
routes.post("/upload", UploadController.upload);
// routes.get("/files", verifyToken, UploadController.getListFiles);
