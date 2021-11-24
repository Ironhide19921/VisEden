const { Router } = require("express");
const { obtener } = require("../controllers/obtener");
// const { buscar } = require('../controllers/buscar');

const router = Router();

router.get("/", obtener);
// router.get('/:coleccion/:termino', buscar)

module.exports = router;
