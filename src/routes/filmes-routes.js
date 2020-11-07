const express = require('express');
const router = express.Router();
const controller = require('../controllers/filmesController')

router.get('/filmes', controller.getFilmes)

router.post('/filmes', controller.addFilme)

router.get('/filmes/:id', controller.getFilmeById)

router.put('/filmes/:id', controller.updateFilme)

router.delete('/filmes/:id', controller.deleteFilme)

module.exports = router;