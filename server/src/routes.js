const express = require('express');

const UserController = require('./controllers/UserController');
const User = require('./models/User');

const router = express.Router();

router.get('/users', UserController.index);

router.get('/users/:user_id', UserController.indexOne);

router.post('/users', UserController.store);

router.put('/users/:user_id', UserController.update);

router.delete('/users/:user_id', UserController.delete);

router.post('/users/login', UserController.login);






module.exports = router;