const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

// CRUD Pessoas
router
  .get('/pessoas', PessoaController.pegaPessoasAtivas) // READ
  .get('/pessoas/todos', PessoaController.pegaTodasAsPessoas) // READ
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa) // READ
  .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)

  .post('/pessoas', PessoaController.criaPessoa) // CREATE
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
  .put('/pessoas/:id', PessoaController.atualizaPessoa) // UPDATE
  .delete('/pessoas/:id', PessoaController.apagaPessoa) // DELETE

  // CRUD Matriculas
  .get(
    '/pessoas/:estudanteId/matricula/:matriculaId',
    PessoaController.pegaUmaMaticula
  ) // READ
  .get(
    '/pessoas/matricula/:turmaId/confirmadas',
    PessoaController.pegaMatriculasPorTurma
  )
  .get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
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
