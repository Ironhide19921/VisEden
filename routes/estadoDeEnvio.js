const { Router } = require("express");
const { estadoDeEnvio } = require("../controllers/estadoDeEnvio");
// const { buscar } = require('../controllers/buscar');

const router = Router();

router.get("/:job_id", estadoDeEnvio);
// router.get('/:coleccion/:termino', buscar)

module.exports = router;
