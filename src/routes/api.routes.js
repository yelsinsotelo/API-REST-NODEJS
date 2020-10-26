import { Router } from 'express';
import AlarmaController from '../controllers/AlarmaController';
import UserController from '../controllers/UserController';
const router = Router();

router.post('/addAlarm',AlarmaController.Store);
router.post('/getAlarms',AlarmaController.Index)
router.post('/addUser',UserController.Store);
router.post('/getUsers', UserController.Index);
export default router;