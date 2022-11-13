'use-strict';

const database = require('../db/bancoconfig');
const Person = require('../models/person'); 

exports.cadPessoa = async function (req, res) {
    await database.sync();

    try {
        await Person.create({
            nome: req.body.nomePerson,
            sobrenome: req.body.sobrenomePerson,
            nacionalidade: req.body.nacionalidadePerson,
            email: req.body.emailPerson,
            telefone: req.body.telefonePerson,
            cep: req.body.cepPerson,
            estado: req.body.estadoPerson,
            cidade: req.body.cidadePerson,
            logradouro: req.body.logradouroPerson,
            numero: req.body.numeroPerson
        });

        return res.status(200).send({msg: 'sucesso'});
    } catch (e) {
        console.log(e)
        return res.status(500).send('erro');
    }
}

exports.getPessoa = async function (req, res) {
    await database.sync();

    try {
        const person = await Person.findAll();
        return res.status(200).send(person);
    } catch (e) {
        console.log(e)
        return res.status(500).send('erro');
    }
}

exports.getPessoaEspecifica = async function (req, res) {
    await database.sync();

    try {
        const person = await Person.findByPk(req.params.idPerson);
        return res.status(200).send(person);
    } catch (e) {
        console.log(e)
        return res.status(500).send('erro');
    }
}

exports.updatePerson = async function (req, res) {
    await database.sync();

    try {
        await Person.update(
            {
            nome: req.body.nomePerson,
            sobrenome: req.body.sobrenomePerson,
            nacionalidade: req.body.nacionalidadePerson,
            email: req.body.emailPerson,
            telefone: req.body.telefonePerson,
            cep: req.body.cepPerson,
            estado: req.body.estadoPerson,
            cidade: req.body.cidadePerson,
            logradouro: req.body.logradouroPerson,
            numero: req.body.numeroPerson
        },
        {
            where: { id: req.params.idPerson }
        }
        );
        return res.status(200).send({msg: 'sucesso'});
    } catch (e) {
        console.log(e)
        return res.status(500).send('erro');
    }
}

exports.deletePerson = async function (req, res) {
    await database.sync();

    try {
        await Person.destroy({ where: { id: req.params.idPerson } });
        return res.status(200).send({msg: 'sucesso'});
    } catch (e) {
        console.log(e)
        return res.status(500).send('erro');
    }
}