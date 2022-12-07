import { Router } from 'express';
import * as UserController from '../controllers/UserController.js';
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';
export const routes = Router();

routes.get("/all",  UserController.getUsers);
routes.post("/id", verifyToken, UserController.getUserId);
routes.post("/registrasi", UserController.Register);
routes.post("/login", UserController.Login);
routes.get("/token",refreshToken);
routes.delete('/logout', UserController.Logout);


