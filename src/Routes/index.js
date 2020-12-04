const express = require('express')
const routes = express.Router()

const UserController = require('../Controllers/UserController');

routes.get('/', async(req, res) => {
    res.send({ 'message': 'Bem vindo a API do Ruptiva Code Challenge'})
});

routes.get('/user', UserController.index)
routes.post('/user', UserController.store)
routes.delete('/user/:id', UserController.destroy)

module.exports = routes
