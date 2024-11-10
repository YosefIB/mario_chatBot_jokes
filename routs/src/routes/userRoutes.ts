import express from 'express';
import { logOff } from '../controllers/userController/logOffController';

const router = express.Router()

router.post('/logOff', logOff);

export default router;