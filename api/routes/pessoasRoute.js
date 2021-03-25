const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

// CRUD Pessoas
router
  .get('/pessoas', PessoaController.pegaPessoasAtivas) // READ
  .get('/pessoas/todos', PessoaController.pegaTodasAsPessoas) // READ
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa) // READ
  .post('/pessoas', PessoaController.criaPessoa) // CREATE
  .put('/pessoas/:id', PessoaController.atualizaPessoa) // UPDATE
  .delete('/pessoas/:id', PessoaController.apagaPessoa) // DELETE
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)

  // CRUD Matriculas
  .get(
    '/pessoas/:estudanteId/matricula/:matriculaId',
    PessoaController.pegaUmaMaticula
  ) // READ
  .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula) // CREATE
  .put(
    '/pessoas/:estudanteId/matricula/:matriculaId',
    PessoaController.atualizaMatricula
  ) // UPDATE
  .delete(
    '/pessoas/:estudanteId/matricula/:matriculaId',
    PessoaController.apagaMatricula
  ); // DELETE

module.exports = router;
