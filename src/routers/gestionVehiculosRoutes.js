const express = require("express");
const { getVehiculos, getConceptos, getProveedores, getCostos } = require("../controllers/gestionVehiculosController");

const router = express.Router();

// Definir rutas
router.get("/vehiculos", getVehiculos);
router.get("/conceptos", getConceptos);
router.get("/proveedores", getProveedores);
router.get("/costos", getCostos);

module.exports = router;
