import { Router } from 'express';
import AlarmaController from '../controllers/AlarmaController'
const router = Router();

router.post('/',AlarmaController.get_status);

export default router;