const express = require("express");
const app = express();
const gestionVehiculosRoutes = require("./src/routers/gestionVehiculosRoutes");

const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Usar las rutas
app.use('/api', gestionVehiculosRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Iniciar el servidor
// app.listen(PORT, () => {
//     console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });

// Exporta la app para que Vercel la utilice
module.exports = app;