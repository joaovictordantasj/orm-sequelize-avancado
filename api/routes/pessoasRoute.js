const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

// CRUD Pessoas
router.get('/pessoas', PessoaController.pegaTodasAsPessoas); // READ
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa); // READ
router.post('/pessoas', PessoaController.criaPessoa); // CREATE
router.put('/pessoas/:id', PessoaController.atualizaPessoa); // UPDATE
router.delete('/pessoas/:id', PessoaController.apagaPessoa); // DELETE

// CRUD Matriculas
router.get(
  '/pessoas/:estudanteId/matricula/:matriculaId',
  PessoaController.pegaUmaMaticula
); // READ
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula); // CREATE
router.put(
  '/pessoas/:estudanteId/matricula/:matriculaId',
  PessoaController.atualizaMatricula
); // UPDATE
router.delete(
  '/pessoas/:estudanteId/matricula/:matriculaId',
  PessoaController.apagaMatricula
); // DELETE

module.exports = router;
