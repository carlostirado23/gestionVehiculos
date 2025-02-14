const express = require("express");
const {
    getVehiculos,
    getConceptos,
    getProveedores,
    getCostos,
    createGuardarDatos,
} = require("../controllers/gestionVehiculosController");
const validacionDeParametros = require("../../middlewares/validationsMiddleware");

const router = express.Router();

// Definir rutas
router.get("/vehiculos", validacionDeParametros, getVehiculos);
router.get("/conceptos", validacionDeParametros, getConceptos);
router.get("/proveedores", validacionDeParametros, getProveedores);
router.get("/costos", validacionDeParametros, getCostos);
router.post("/guardar", validacionDeParametros, createGuardarDatos);

module.exports = router;
