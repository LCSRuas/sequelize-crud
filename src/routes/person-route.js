'use-strict';

const router = require('./route-config');
const controller = require('../controller/person-controller');

// Cadastra pessoa
router.post('/', controller.cadPessoa);

// Captura pessoa
router.get('/', controller.getPessoa);

// Captura uma pessoa especifica
router.get('/:idPerson', controller.getPessoaEspecifica);

// Atualiza uma pessoa especifica
router.put('/:idPerson', controller.updatePerson);

// Deleta uma pessoa especifica
router.delete('/:idPerson', controller.deletePerson);

module.exports = router;
