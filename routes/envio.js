const { Router } = require("express");
const { envio } = require("../controllers/envio");
// const { buscar } = require('../controllers/buscar');

const router = Router();

router.get("/", envio);
// router.get('/:coleccion/:termino', buscar)

module.exports = router;
