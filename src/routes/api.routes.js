import { Router } from 'express';
import AlarmaController from '../controllers/AlarmaController'
const router = Router();

router.get('/',AlarmaController.get_status);

export default router;