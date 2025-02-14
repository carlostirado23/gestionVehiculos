const db = require("../../config/database").db;

// Obtener todos los vehículos
exports.getVehiculos = async (req, res) => {
    try {
        const snapshot = await db.collection("vehiculos").get();
        const vehiculos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(vehiculos);
    } catch (error) {
        console.error("Error al obtener vehiculos:", error);
        res.status(500).send("Error al obtener vehiculos");
    }
};

// Obtener todos los conceptos
exports.getConceptos = async (req, res) => {
    try {
        const snapshot = await db.collection("conceptos").get();
        const conceptos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(conceptos);
    } catch (error) {
        console.error("Error al obtener conceptos:", error);
        res.status(500).send("Error al obtener conceptos");
    }
};

// Obtener todos los proveedores
exports.getProveedores = async (req, res) => {
    try {
        const snapshot = await db.collection("proveedores").get();
        const proveedores = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(proveedores);
    } catch (error) {
        console.error("Error al obtener proveedores:", error);
        res.status(500).send("Error al obtener proveedores");
    }
};

// Obtener todos los costos
exports.getCostos = async (req, res) => {
    try {
        const snapshot = await db.collection("costos").get();
        const costos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(costos);
    } catch (error) {
        console.error("Error al obtener costos:", error);
        res.status(500).send("Error al obtener costos");
    }
};

exports.createGuardarDatos = async (req, res) => {
    try {
        let {
            placa,
            concepto,
            proveedor,
            factura,
            valor,
            costos,
            cantidad,
            fecha,
            kilometraje,
            descontar,
            observacion,
        } = req.body;

        // Filtrar valores undefined
        const data = {
            placa,
            concepto,
            proveedor,
            factura,
            valor,
            costos,
            cantidad,
            fecha,
            kilometraje,
            descontar,
            observacion,
        };

        // Remover propiedades con valor undefined
        Object.keys(data).forEach((key) => {
            if (data[key] === undefined) delete data[key];
        });

        // Guardar en Firestore
        const docRef = await db.collection("datosguardados").add(data);

        res.status(201).json({ id: docRef.id });
    } catch (error) {
        console.error("Error al guardar datos:", error);
        res.status(500).send("Error al guardar datos");
    }
};

