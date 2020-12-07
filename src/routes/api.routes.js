import { Router } from 'express';
import AlarmaController from '../controllers/AlarmaController';
import UserController from '../controllers/UserController';
import GroupController from '../controllers/GroupController';
import EmergencyController from '../controllers/EmergencyController';
import FunctionController from '../controllers/FunctionController'
const router = Router();

router.post('/addAlarm',AlarmaController.Store);
router.post('/getAlarms',AlarmaController.Index);
router.post('/editAlarm/:id', AlarmaController.Edit);
router.post('/deleteAlarm/:id', AlarmaController.Destroy);
router.post('/updateEquipment', AlarmaController.Update);

router.post('/addUser',UserController.Store);
router.post('/getUsers', UserController.Index);
router.post('/editUser/:id', UserController.Edit);
router.post('/deleteUser/:id' , UserController.Destroy);
router.post('/updataUser/:id', UserController.Update);

router.post('/addGroup',GroupController.Store);
router.post('/getGroup', GroupController.Index);
router.post('/editGroup/:id', GroupController.Edit);
router.post('/deleteGroup/:id' , GroupController.Destroy);
router.post('/updataGroup/:id', GroupController.Update);

router.post('/addEmergency',EmergencyController.Store);
router.post('/getEmergency', EmergencyController.Index);
router.post('/editEmergency/:id', EmergencyController.Edit);
router.post('/deleteEmergency/:id' , EmergencyController.Destroy);
router.post('/updataEmergency/:id', EmergencyController.Update);

router.post('/tone/:num', FunctionController.tone);
router.post('/silence', FunctionController.tone);
router.post('/alarm', FunctionController.alarm);
export default router;
