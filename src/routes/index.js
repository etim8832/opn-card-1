const express = require('express');
const router = express.Router();

const users = require('../controllers/user')
const validate = require('../services/validate')
const auth = require('../services/authentication')

router.get('/user/:id', auth.authenticateToken, users.getUsersById);
router.post('/register', validate.validateRegistration, users.register);
router.patch('/user', auth.authenticateToken, validate.validateEditProfile, users.editUser);
router.patch('/user/:id/changePassword', auth.authenticateToken, validate.validateChangePasswrod, users.changePassword);
router.delete('/user/:id', auth.authenticateToken, users.deleteUser);

module.exports = router

