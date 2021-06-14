import express from 'express';
import controller from '../controllers/controller'
const router=express.Router();


router.get('/',controller.getUsers);
router.post('/',controller.postAddUser)
router.get('/:id',controller.getUserWithID);
router.delete('/:id',controller.DeleteUserwithID);
router.put('/:id',controller.UpdateUserPasswithID);
export =router;
