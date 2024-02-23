const express = require('express')
const router = express.Router();
const userController = require('../controllers/usersController')

router.get('/', userController.getUsers);// for all users
router.post('/', userController.createUser) // to reate a new user
router.get('/:id', userController.getUser)// to get perticular user
router.delete('/:id', userController.deleteUser)// to delete user
router.put('/:id', userController.updateUser)//PUT request
router.patch('/:id', userController.patchUser)
module.exports = router;


