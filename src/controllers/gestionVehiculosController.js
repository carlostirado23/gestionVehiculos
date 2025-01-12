const Pool = require("../../config/database");

// Obtener todos los vehículos
const getVehiculos = async (req, res) => {
    try {
        const result = await Pool.query("SELECT * FROM vehiculos");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los vehículos" });
    }
};

// Obtener todos los conceptos
const getConceptos = async (req, res) => {
    try {
        const result = await Pool.query("SELECT * FROM conceptos");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los conceptos" });
    }
};

// Obtener todos los proveedores
const getProveedores = async (req, res) => {
    try {
        const result = await Pool.query("SELECT * FROM proveedores");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los proveedores" });
    }
};

// Obtener todos los costos
const getCostos = async (req, res) => {
    try {
        const result = await Pool.query("SELECT * FROM costos");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los costos" });
    }
};

// Exportar funciones
module.exports = {
    getVehiculos,
    getConceptos,
    getProveedores,
    getCostos,
};
